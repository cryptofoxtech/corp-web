// client/src/components/Blog/BlogPostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPostDetail.css'; // Keep this if you have the CSS file

const BlogPostDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate(); // Added navigate hook
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(null); // Clear previous errors
            try {
                // *** THIS IS THE CRITICAL CHANGE ***
                // We are now relying on the 'proxy' setting in client/package.json
                const response = await fetch(`/api/blogApi?slug=${slug}`); // Changed URL and endpoint to match Azure Function

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

        if (slug) { // Only fetch if slug is available
            fetchPost();
        }
    }, [slug]); // Re-run effect if slug changes

    if (loading) {
        return <div className="blog-detail-container loading">Loading blog post...</div>;
    }

    if (error) {
        return (
            <div className="blog-detail-container error">
                <p>{error}</p>
                <button onClick={() => navigate('/blog')} className="back-to-blog-link">Back to Blog List</button> {/* Changed Link to button with navigate */}
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-detail-container no-post">
                <p>No blog post data available.</p>
                <button onClick={() => navigate('/blog')} className="back-to-blog-link">Back to Blog List</button> {/* Changed Link to button with navigate */}
            </div>
        );
    }

    return (
        <div className="blog-detail-container">
            <h1 className="blog-detail-title">{post.title}</h1>
            <p className="blog-detail-meta">
                By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
            <div className="blog-detail-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
            <button onClick={() => navigate('/blog')} className="back-to-blog-link">← Back to All Posts</button> {/* Changed Link to button with navigate */}
        </div>
    );
};

export default BlogPostDetail;