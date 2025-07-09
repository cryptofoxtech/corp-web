// client/src/pages/Blog/Blog.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../../components/Blog/BlogList.js';
import BlogPostDetail from '../../components/Blog/BlogPostDetail.js';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page-container">
            <Routes>
                {/* Corrected: Remove .js from inside the JSX tag */}
                <Route index element={<BlogList />} />
                {/* Corrected: Remove .js from inside the JSX tag */}
                <Route path=":slug" element={<BlogPostDetail />} />
            </Routes>
        </div>
    );
};

export default Blog;