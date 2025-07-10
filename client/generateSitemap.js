// client/generateSitemap.js
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import routesConfig from './src/routesConfig.js'; // Your static routes configuration

// Get __dirname equivalent in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output path for the sitemap.xml relative to this script
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Base URL for your website (important for absolute URLs in sitemap)
const BASE_URL = 'https://www.cryptofoxtech.com'; // Confirmed as correct

// API URL to fetch blog post slugs
// When running locally, this will hit your local func start.
// When running in CI/CD (GitHub Actions), this will hit the deployed Azure Static Web App API.
const BLOG_API_URL = `${BASE_URL}/api/blogApi`;

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

    // Start building the sitemap XML string
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add each static route from routesConfig to the sitemap
    routesConfig.forEach(route => {
      const fullUrl = `${BASE_URL}${route}`;
      sitemapContent += `  <url>\n`;
      sitemapContent += `    <loc>${fullUrl}</loc>\n`;
      sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`; // Current date (YYYY-MM-DD)
      sitemapContent += `    <changefreq>daily</changefreq>\n`;
      sitemapContent += `    <priority>0.7</priority>\n`;
      sitemapContent += `  </url>\n`;
    });

    // --- NEW: Fetch dynamic blog post URLs ---
    console.log(`Fetching blog post slugs from: ${BLOG_API_URL}`);
    const response = await fetch(BLOG_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts from API: ${response.status} ${response.statusText}`);
    }
    const blogPosts = await response.json();

    blogPosts.forEach(post => {
      const fullUrl = `${BASE_URL}/blog/${post.slug}`; // Construct blog post URL
      sitemapContent += `  <url>\n`;
      sitemapContent += `    <loc>${fullUrl}</loc>\n`;
      // Use post.date for lastmod if available, otherwise current date
      sitemapContent += `    <lastmod>${post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>\n`;
      sitemapContent += `    <changefreq>weekly</changefreq>\n`; // Blog posts might change less frequently than main pages
      sitemapContent += `    <priority>0.8</priority>\n`; // Blog posts are often high-priority content
      sitemapContent += `  </url>\n`;
    });
    // --- END NEW SECTION ---

    // Close the urlset tag
    sitemapContent += `</urlset>`;

    // Write the complete XML string to the sitemap file
    writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8');

    console.log(`Sitemap generated successfully at ${SITEMAP_FILE}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Exit with a non-zero code to fail the CI/CD build if sitemap generation fails
    process.exit(1);
  }
};

generateSitemap();