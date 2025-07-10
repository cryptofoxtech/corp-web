// client/src/pages/Blog/Blog.js
import React, { useEffect } from 'react'; // Add useEffect for scrolling
import { Routes, Route, useLocation } from 'react-router-dom'; // Add useLocation for canonical URL
import { Helmet } from 'react-helmet-async'; // Import Helmet

// Import your BlogList component from its new home
import BlogList from '../../components/Blog/BlogList.js'; // Correct path to your BlogList.js

// Import BlogPostDetail (we'll modify this one next)
import BlogPostDetail from '../../components/Blog/BlogPostDetail.js'; // This path assumes it's directly under components

const Blog = () => {
    const location = useLocation();
    // Construct the canonical URL for the blog list page
    const canonicalUrl = `https://www.cryptofoxtech.com${location.pathname}`;

    useEffect(() => {
        // Scroll to the top of the page when the component mounts or route changes
        window.scrollTo(0, 0);
    }, [location.pathname]); // Re-run when the pathname changes (e.g., navigating to a blog post)

    return (
        <section className="py-5">
            <Helmet>
                {/* Meta Description for the main blog list page */}
                <title>Cryptofox Technology Blog - Insights on DevOps, Cloud, AI & Web Dev</title>
                <meta name="description" content="Explore the Cryptofox Technology blog for expert insights, tutorials, and discussions on DevOps, Cloud Infrastructure, AI, and modern Web Development." />
                {/* Canonical Tag for the main blog list page */}
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <div className="container">
                <Routes>
                    {/* Route for displaying the list of all blog posts */}
                    <Route index element={<BlogList />} />

                    {/* Route for displaying a single blog post by its slug */}
                    <Route path=":slug" element={<BlogPostDetail />} />
                </Routes>
            </div>
        </section>
    );
};

export default Blog;