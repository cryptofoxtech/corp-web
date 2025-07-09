// client/src/components/Blog/BlogPostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPostDetail.css'; // We'll create this CSS file next

const BlogPostDetail = () => {
    const { slug } = useParams(); // Get the 'slug' from the URL parameters
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
                const response = await fetch(`${apiUrl}/api/blog/posts/${slug}`);
                
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

        fetchPost();
    }, [slug]); // Re-run effect if slug changes

    if (loading) {
        return <div className="blog-detail-container loading">Loading blog post...</div>;
    }

    if (error) {
        return (
            <div className="blog-detail-container error">
                <p>{error}</p>
                <Link to="/blog" className="back-to-blog-link">Back to Blog List</Link>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-detail-container no-post">
                <p>No blog post data available.</p>
                <Link to="/blog" className="back-to-blog-link">Back to Blog List</Link>
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
            <Link to="/blog" className="back-to-blog-link">← Back to All Posts</Link>
        </div>
    );
};

export default BlogPostDetail;