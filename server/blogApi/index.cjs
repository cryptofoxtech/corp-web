// server/blogApi/index.cjs
const path = require('path');
const fs = require('fs').promises;

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const { marked } = await import('marked'); // For Markdown parsing - using dynamic import

    // --- START DEBUGGING LINES ---
    context.log(`DEBUG: Value of __dirname: ${__dirname}`);

    // Explicitly check if __dirname is valid before using it
    if (typeof __dirname !== 'string' || __dirname === undefined) {
        context.log('ERROR: __dirname is invalid. Type: ' + typeof __dirname + ', Value: ' + __dirname);
        context.res = {
            status: 500,
            body: "Internal server error: Base directory not found. Please check logs for '__dirname' status."
        };
        return; // Stop execution if __dirname is not a string
    }
    // --- END DEBUGGING LINES ---

    // THIS IS LINE 14 (adjust based on your file after pasting)
    const postsDirectory = path.join(__dirname, '..', '..', 'posts');

    context.log(`DEBUG: Calculated postsDirectory: ${postsDirectory}`); // Log the calculated path

    // Handle CORS (important for frontend communication)
    context.res = {
        headers: {
            'Access-Control-Allow-Origin': '*', // Or specific origins like 'https://www.cryptofoxtech.com' in production
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    };

    if (req.method === 'OPTIONS') {
        context.res.status = 204; // No content for preflight
        return;
    }

    const slug = (req.query.slug || (req.body && req.body.slug));

    if (slug) {
        // Logic for a single blog post
        try {
            const filePath = path.join(postsDirectory, `${slug}.md`);
            context.log(`Attempting to read file: ${filePath}`);
            const fileContent = await fs.readFile(filePath, 'utf8');

            // Basic front-matter parsing (assumes simple key: value at top)
            const lines = fileContent.split('\n');
            let frontMatter = {};
            let contentStartIndex = 0;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].trim() === '---' && i > 0 && lines[i-1].trim() !== '') { // Check for ending ---
                    contentStartIndex = i + 1;
                    break;
                }
                if (lines[i].includes(':')) {
                    const [key, value] = lines[i].split(':', 2).map(s => s.trim());
                    frontMatter[key.toLowerCase()] = value; // Store in lowercase for consistency
                } else if (lines[i].trim() === '' && i > 0 && lines[i-1].trim() === '') {
                    // Stop if two consecutive empty lines (end of front matter)
                    contentStartIndex = i + 1;
                    break;
                }
                contentStartIndex = i + 1; // Keep incrementing if not a key-value or separator
            }

            const markdownContent = lines.slice(contentStartIndex).join('\n').trim();

            const post = {
                title: frontMatter.title || 'Untitled',
                author: frontMatter.author || 'Anonymous',
                date: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
                slug: slug,
                summary: frontMatter.summary || markdownContent.substring(0, 150) + '...', // Basic summary
                content: markdownContent, // Frontend expects raw Markdown for now. We can parse to HTML later.
            };

            context.res.status = 200;
            context.res.body = post;

        } catch (error) {
            if (error.code === 'ENOENT') {
                context.log(`Blog post not found: ${slug}.md`);
                context.res.status = 404;
                context.res.body = { message: "Blog post not found." };
            } else {
                context.log.error(`Error reading blog post ${slug}:`, error);
                context.res.status = 500;
                context.res.body = { message: "Error fetching blog post." };
            }
        }
    } else {
        // Logic for listing all blog posts
        try {
            const files = await fs.readdir(postsDirectory);
            const markdownFiles = files.filter(file => file.endsWith('.md'));

            const posts = await Promise.all(markdownFiles.map(async (file) => {
                const filePath = path.join(postsDirectory, file);
                const fileContent = await fs.readFile(filePath, 'utf8');
                const slug = path.basename(file, '.md');

                // Basic front-matter parsing for summary
                const lines = fileContent.split('\n');
                let frontMatter = {};
                let contentStartIndex = 0;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].trim() === '---' && i > 0 && lines[i-1].trim() !== '') {
                        contentStartIndex = i + 1;
                        break;
                    }
                    if (lines[i].includes(':')) {
                        const [key, value] = lines[i].split(':', 2).map(s => s.trim());
                        frontMatter[key.toLowerCase()] = value;
                    } else if (lines[i].trim() === '' && i > 0 && lines[i-1].trim() === '') {
                        contentStartIndex = i + 1;
                        break;
                    }
                    contentStartIndex = i + 1;
                }
                const markdownContent = lines.slice(contentStartIndex).join('\n').trim();

                return {
                    title: frontMatter.title || 'Untitled',
                    author: frontMatter.author || 'Anonymous',
                    date: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
                    slug: slug,
                    summary: frontMatter.summary || markdownContent.substring(0, Math.min(markdownContent.length, 150)) + '...',
                };
            }));

            // Sort posts by date, newest first
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));

            context.res.status = 200;
            context.res.body = posts;

        } catch (error) {
            context.log.error('Error fetching blog post list:', error);
            context.res.status = 500;
            context.res.body = { message: "Error fetching blog post list." };
        }
    }
};