// server/blogApi/index.cjs
const path = require('path');
const fs = require('fs').promises;

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    // Using CommonJS require for 'marked' for broader compatibility in Node.js Functions
    const { marked } = require('marked');

    // --- START DEBUGGING LINES ---
    // These logs will be crucial to see in Application Insights if issues persist
    context.log(`DEBUG: Value of __dirname: ${__dirname}`);
    if (typeof __dirname !== 'string' || __dirname === undefined) {
        context.log('ERROR: __dirname is invalid. Type: ' + typeof __dirname + ', Value: ' + __dirname);
        context.res = {
            status: 500,
            body: "Internal server error: Base directory not found. Please check logs for '__dirname' status."
        };
        return;
    }
    // --- END DEBUGGING LINES ---

    // CORRECTED PATH: Navigate up two levels from blogApi/ (to repo root), then into 'posts'
    // This assumes 'posts' is copied to the wwwroot alongside the API.
    const postsDirectory = path.join(__dirname, '..', 'posts');

    context.log(`DEBUG: Calculated postsDirectory: ${postsDirectory}`);

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
            // Iterate until a '---' or two consecutive empty lines are found, or end of file
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].trim() === '---') { // Check for front-matter delimiter
                    // If it's the opening '---' at the start of the file or after empty lines, continue parsing front matter
                    // If it's the closing '---' and not the very first line, break.
                    if (i > 0 && lines[i-1].trim() !== '') { // This checks for a closing '---' after actual content
                        contentStartIndex = i + 1;
                        break;
                    } else if (i === 0) { // This handles the opening '---' at line 0
                        // Just advance contentStartIndex past this line, and we'll process from next line
                        contentStartIndex = i + 1;
                        continue;
                    }
                }
                if (lines[i].includes(':')) {
                    const [key, value] = lines[i].split(':', 2).map(s => s.trim());
                    frontMatter[key.toLowerCase()] = value; // Store in lowercase for consistency
                } else if (lines[i].trim() === '' && i > 0 && lines[i-1].trim() === '') {
                    // Stop if two consecutive empty lines (end of front matter block)
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
                summary: frontMatter.summary || markdownContent.substring(0, Math.min(markdownContent.length, 150)) + '...', // Basic summary
                content: markdownContent, // Frontend expects raw Markdown for now. We can parse to HTML later.
            };

            context.res.status = 200;
            context.res.body = post;

        } catch (error) {
            if (error.code === 'ENOENT') {
                context.log(`Blog post not found: ${slug}.md at path: ${postsDirectory}`);
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
                    if (lines[i].trim() === '---') { // Check for front-matter delimiter
                         if (i > 0 && lines[i-1].trim() !== '') {
                            contentStartIndex = i + 1;
                            break;
                        } else if (i === 0) {
                            contentStartIndex = i + 1;
                            continue;
                        }
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