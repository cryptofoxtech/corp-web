// client/src/components/Blog/BlogPostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation for canonical URL
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import './BlogPostDetail.css'; // Keep this if you have the CSS file

// Custom component to render images with alt attributes and WebP support
const MarkdownImage = ({ node, ...props }) => {
    // Ensure src is valid and handle potential undefined alt
    const imageUrl = props.src;
    const imageAlt = props.alt || `Image for ${props.title || 'blog post content'}`; // Fallback alt text

    // Determine WebP path - assuming your images are served from a known path
    // and that the .webp version exists at the same base path.
    // This is a common pattern: /path/to/image.png -> /path/to/image.webp
    const webpUrl = imageUrl ? imageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp') : '';

    return (
        <picture>
            {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
            <img {...props} alt={imageAlt} loading="lazy" /> {/* Add loading="lazy" for performance */}
        </picture>
    );
};


const BlogPostDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation(); // For canonical URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(null); // Clear previous errors
            try {
                const response = await fetch(`/api/blogApi?slug=${slug}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Blog post not found.");
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                console.error(`Error fetching blog post ${slug}:`, err);
                setError(err.message || "Failed to load blog post. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPost();
        }
        // Scroll to the top when a new blog post loads
        window.scrollTo(0, 0);
    }, [slug]); // Re-run effect if slug changes

    // Construct the canonical URL for the individual blog post
    const canonicalUrl = `https://www.cryptofoxtech.com${location.pathname}`;

    // Helper to truncate text for meta description
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
        return `${truncated}...`;
    };

    if (loading) {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="blog-detail-container loading text-center">Loading blog post...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="blog-detail-container error text-center">
                        <p>{error}</p>
                        <button onClick={() => navigate('/blog')} className="btn btn-primary-gold mt-3">Back to Blog List</button>
                    </div>
                </div>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="blog-detail-container no-post text-center">
                        <p>No blog post data available.</p>
                        <button onClick={() => navigate('/blog')} className="btn btn-primary-gold mt-3">Back to Blog List</button>
                    </div>
                </div>
            </section>
        );
    }

    // Generate dynamic meta description based on post summary or content
    const metaDescription = post.summary ? truncateText(post.summary, 160) : truncateText(post.content, 160);
    const pageTitle = post.title ? `${post.title} - Cryptofox Technology Blog` : 'Blog Post - Cryptofox Technology';


    return (
        <section className="py-5">
            <Helmet>
                {/* Dynamic Meta Description for individual blog posts */}
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                {/* Canonical Tag for the individual blog post */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Social Media Meta Tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                {/* Add og:image if your blog posts have a featured image */}
                {/* <meta property="og:image" content={post.featuredImage} /> */}
                {/* <meta property="og:image:alt" content={post.featuredImageAlt} /> */}

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" /> {/* Or "summary" if no large image */}
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {/* <meta name="twitter:image" content={post.featuredImage} /> */}
                {/* <meta name="twitter:image:alt" content={post.featuredImageAlt} /> */}
            </Helmet>

            <div className="container">
                <div className="blog-detail-container">
                    <h1 className="blog-detail-title text-teal">{post.title}</h1>
                    <p className="blog-detail-meta text-muted small">
                        By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div className="blog-detail-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{ img: MarkdownImage }} // Use the custom image component here
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                    <button onClick={() => navigate('/blog')} className="btn btn-primary-gold mt-4">← Back to All Posts</button>
                </div>
            </div>
        </section>
    );
};

export default BlogPostDetail;