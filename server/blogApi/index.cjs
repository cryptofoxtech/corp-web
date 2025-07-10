// server/blogApi/index.cjs
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter'); // For parsing front matter from Markdown files

// IMPORTANT: No 'marked' or 'markedInstance' needed here.
// The API will send raw Markdown content, and the frontend (ReactMarkdown)
// will handle the conversion to HTML for display.

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    // --- DEBUGGING PATHS ---
    // This path calculation assumes 'posts' directory is copied into the 'server' directory
    // during deployment or manually for local testing.
    context.log(`DEBUG: Function Dir (__dirname): ${__dirname}`);
    const postsDirectory = path.join(__dirname, '..', 'posts');
    context.log(`DEBUG: Calculated postsDirectory: ${postsDirectory}`);
    // --- END DEBUGGING PATHS ---

    // Handle CORS (Cross-Origin Resource Sharing)
    context.res = {
        headers: {
            'Access-Control-Allow-Origin': '*', // IMPORTANT: For production, change '*' to your specific frontend URL (e.g., 'https://www.cryptofoxtech.com')
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    };

    // Respond to preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
        context.res.status = 204; // No content for preflight
        return;
    }

    const slug = (req.query.slug || (req.body && req.body.slug));

    if (slug) {
        // Logic for fetching a single blog post
        try {
            const filePath = path.join(postsDirectory, `${slug}.md`);
            context.log(`DEBUG: Attempting to read single file: ${filePath}`);
            const fileContent = await fs.readFile(filePath, 'utf8');
            context.log(`DEBUG: File '${slug}.md' read successfully.`);

            // Use gray-matter to parse front matter and content
            const { data: frontMatter, content: markdownContent } = matter(fileContent);
            context.log(`DEBUG: Front matter and content parsed for ${slug}.md`);

            const post = {
                title: frontMatter.title || 'Untitled',
                author: frontMatter.author || 'Anonymous',
                date: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
                slug: slug,
                // CRITICAL CHANGE: Send the raw markdownContent here.
                // The frontend's ReactMarkdown component will render it.
                content: markdownContent,
            };

            context.res.status = 200;
            context.res.body = post;

        } catch (error) {
            if (error.code === 'ENOENT') {
                context.log(`ERROR: Blog post file not found: ${slug}.md at path: ${postsDirectory}`);
                context.res.status = 404;
                context.res.body = { message: "Blog post not found." };
            } else {
                context.log.error(`CRITICAL ERROR: Error fetching single blog post ${slug}:`, error);
                context.res.status = 500;
                context.res.body = { message: `Error fetching blog post: ${error.message}` };
            }
        }
    } else {
        // Logic for listing all blog posts (no change to content here, as it's just summary)
        try {
            context.log(`DEBUG: Attempting to read directory for listing: ${postsDirectory}`);
            const files = await fs.readdir(postsDirectory);
            context.log(`DEBUG: Directory read successfully. Found ${files.length} files.`);
            const markdownFiles = files.filter(file => file.endsWith('.md'));
            context.log(`DEBUG: Found ${markdownFiles.length} markdown files.`);

            const posts = await Promise.all(markdownFiles.map(async (file) => {
                const filePath = path.join(postsDirectory, file);
                context.log(`DEBUG: Processing file for list: ${filePath}`);
                const fileContent = await fs.readFile(filePath, 'utf8');
                const slug = path.basename(file, '.md');

                // Use gray-matter for parsing in list scenario too
                const { data: frontMatter, content: markdownContent } = matter(fileContent);

                return {
                    title: frontMatter.title || 'Untitled',
                    author: frontMatter.author || 'Anonymous',
                    date: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
                    slug: slug,
                    // For the summary, we're already just taking a substring, so this is fine.
                    summary: frontMatter.summary || markdownContent.substring(0, Math.min(markdownContent.length, 150)) + '...',
                };
            }));

            // Sort posts by date, newest first
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));

            context.res.status = 200;
            context.res.body = posts;

        } catch (error) {
            context.log.error('CRITICAL ERROR: Error fetching blog post list:', error);
            context.res.status = 500;
            context.res.body = { message: `Error fetching blog post list: ${error.message}` };
        }
    }
};