// client/src/components/Blog/BlogList.js
import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Ensure you've installed framer-motion: npm install framer-motion

const BlogList = () => { // Renamed component to BlogList
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using the proxy, so just /api/blogApi is enough
        const response = await fetch('/api/blogApi');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.error("Failed to fetch blog posts:", e);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div className="text-center py-5">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-5">No blog posts found.</div>;
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center text-teal">Our Insights</h2>
        <div className="row g-4">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-gold fw-bold">{post.title}</h5>
                  <p className="card-subtitle mb-2 text-muted small">
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="card-text flex-grow-1">{post.summary}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn btn-primary-gold mt-3 align-self-start"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList; // Exporting BlogList