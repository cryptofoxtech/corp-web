// client/src/components/Blog/BlogList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css'; // We'll create this CSS file next

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Use the environment variable for the backend URL
                const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
                const response = await fetch(`${apiUrl}/api/blog/posts`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
        return <div className="blog-list-container loading">Loading blog posts...</div>;
    }

    if (error) {
        return <div className="blog-list-container error">{error}</div>;
    }

    if (posts.length === 0) {
        return <div className="blog-list-container no-posts">No blog posts available yet. Check back soon!</div>;
    }

    return (
        <div className="blog-list-container">
            <h1>Our Latest Insights</h1>
            <div className="posts-grid">
                {posts.map((post) => (
                    <div key={post.slug} className="blog-post-card">
                        <h2>
                            <Link to={`/blog/${post.slug}`} className="blog-post-title-link">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="blog-post-meta">
                            By {post.author} on {new Date(post.date).toLocaleDateString()}
                        </p>
                        <p className="blog-post-summary">{post.summary}</p>
                        <Link to={`/blog/${post.slug}`} className="read-more-link">
                            Read More &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;