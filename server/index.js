// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs/promises'; // Import Node.js file system promises API
import path from 'path';     // Import Node.js path module
import matter from 'gray-matter'; // Import gray-matter for parsing front matter

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Blog API Routes ---

// Helper function to read and parse a single Markdown file
async function getParsedMarkdown(filePath) {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent); // 'data' is front matter, 'content' is markdown body
        return {
            ...data, // Spread front matter properties (title, author, date, slug, summary)
            content  // The actual markdown content
        };
    } catch (error) {
        console.error(`Error reading or parsing Markdown file ${filePath}:`, error);
        return null; // Return null if file not found or parsing fails
    }
}

// Route to get a list of all blog posts (metadata only)
app.get('/api/blog/posts', async (req, res) => {
    const postsDirectory = path.join(process.cwd(), 'posts'); // Path to your posts folder
    try {
        const files = await fs.readdir(postsDirectory);
        const markdownFiles = files.filter(file => file.endsWith('.md'));

        const postsMetadata = await Promise.all(markdownFiles.map(async (file) => {
            const filePath = path.join(postsDirectory, file);
            const parsed = await getParsedMarkdown(filePath);
            if (parsed) {
                // Return only metadata for the list view, not the full content
                const { content, ...metadata } = parsed;
                return metadata;
            }
            return null;
        }));

        // Filter out any nulls if a file failed to parse
        const validPosts = postsMetadata.filter(post => post !== null);

        // Sort posts by date, newest first (assuming 'date' is in a sortable format like YYYY-MM-DD)
        validPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        res.json(validPosts);
    } catch (error) {
        console.error('Error fetching blog post list:', error);
        res.status(500).json({ message: 'Failed to fetch blog posts.' });
    }
});

// Route to get a single blog post by its slug
app.get('/api/blog/posts/:slug', async (req, res) => {
    const { slug } = req.params;
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.md`); // Assume slug matches filename

    try {
        const post = await getParsedMarkdown(filePath);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Blog post not found.' });
        }
    } catch (error) {
        console.error(`Error fetching blog post with slug ${slug}:`, error);
        res.status(500).json({ message: 'Failed to fetch blog post.' });
    }
});

// --- Existing Routes ---

// Basic API route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend API!' });
});

// Example route for a contact form submission (will be expanded later)
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Received contact form submission:', { name, email, subject, message });
    // In a real application, you would send an email here using a service like Nodemailer
    res.status(200).json({ message: 'Message received successfully!' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});