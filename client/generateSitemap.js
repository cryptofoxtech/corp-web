// client/generateSitemap.js
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import routesConfig from './src/routesConfig.js'; // Your routes configuration

// Get __dirname equivalent in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output path for the sitemap.xml relative to this script
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Base URL for your website (important for absolute URLs in sitemap)
// IMPORTANT: Replace 'https://www.cryptofox.ca' with your actual domain when you deploy!
const BASE_URL = 'https://www.cryptofoxtech.com';

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

    // Add each route from routesConfig to the sitemap
    routesConfig.forEach(route => {
      const fullUrl = `${BASE_URL}${route}`;
      sitemapContent += `  <url>\n`;
      sitemapContent += `    <loc>${fullUrl}</loc>\n`;
      sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`; // Current date (YYYY-MM-DD)
      sitemapContent += `    <changefreq>daily</changefreq>\n`;
      sitemapContent += `    <priority>0.7</priority>\n`;
      sitemapContent += `  </url>\n`;
    });

    // Close the urlset tag
    sitemapContent += `</urlset>`;

    // Write the complete XML string to the sitemap file
    writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8');

    console.log(`Sitemap generated successfully at ${SITEMAP_FILE}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();