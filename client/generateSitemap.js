// client/generateSitemap.js
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync, writeFileSync, readdirSync, readFileSync } from 'fs'; // IMPORTANT: Added readdirSync, readFileSync
import matter from 'gray-matter'; // IMPORTANT: Added gray-matter
import routesConfig from './src/routesConfig.js'; // Your static routes configuration

// Get __dirname equivalent in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output path for the sitemap.xml relative to this script
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Base URL for your website
const BASE_URL = 'https://www.cryptofoxtech.com';

// IMPORTANT: Removed BLOG_API_URL as we are no longer fetching from the API

// Path to the posts directory relative to the project root
// In GitHub Actions, 'client' is at /home/runner/work/corp-web/corp-web/client
// The 'server/posts' is at /home/runner/work/corp-web/corp-web/server/posts
// So, we need to go up from 'client' and then into 'server/posts'
const POSTS_DIR = path.resolve(__dirname, '..', 'server', 'posts'); // IMPORTANT: Adjusted path to read local files

const generateSitemap = async () => {
  console.log('Generating sitemap...');
  try {
    // Ensure the 'public' directory exists
    if (!existsSync(PUBLIC_DIR)) {
      mkdirSync(PUBLIC_DIR, { recursive: true });
      console.log(`Created directory: ${PUBLIC_DIR}`);
    } else {
      console.log(`Directory already exists: ${PUBLIC_DIR}`);
    }

    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    routesConfig.forEach(route => {
      const fullUrl = `${BASE_URL}${route}`;
      sitemapContent += `  <url>\n`;
      sitemapContent += `    <loc>${fullUrl}</loc>\n`;
      sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      sitemapContent += `    <changefreq>daily</changefreq>\n`;
      sitemapContent += `    <priority>0.7</priority>\n`;
      sitemapContent += `  </url>\n`;
    });

    // --- MODIFIED: Read blog post slugs directly from files ---
    console.log(`Reading blog post slugs from local directory: ${POSTS_DIR}`); // Changed log message
    if (!existsSync(POSTS_DIR)) {
      console.error(`Error: Blog posts directory not found at ${POSTS_DIR}`);
      throw new Error(`Blog posts directory not found: ${POSTS_DIR}`);
    }

    const postFiles = readdirSync(POSTS_DIR);
    const blogPosts = [];

    postFiles.forEach(file => {
      if (file.endsWith('.md')) {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        // Assuming your front matter includes a 'slug' and 'date' field
        if (data.slug) {
          blogPosts.push({
            slug: data.slug,
            date: data.date || new Date().toISOString().split('T')[0] // Use post date or current if missing
          });
        }
      }
    });

    blogPosts.forEach(post => {
      const fullUrl = `${BASE_URL}/blog/${post.slug}`;
      sitemapContent += `  <url>\n`;
      sitemapContent += `    <loc>${fullUrl}</loc>\n`;
      sitemapContent += `    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>\n`;
      sitemapContent += `    <changefreq>weekly</changefreq>\n`;
      sitemapContent += `    <priority>0.8</priority>\n`;
      sitemapContent += `  </url>\n`;
    });
    // --- END MODIFIED SECTION ---

    sitemapContent += `</urlset>`;

    writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8');

    console.log(`Sitemap generated successfully at ${SITEMAP_FILE}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1); // Ensure CI/CD fails on error
  }
};

generateSitemap();