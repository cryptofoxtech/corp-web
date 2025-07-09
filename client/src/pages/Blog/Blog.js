// client/src/pages/Blog/Blog.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your BlogList component from its new home
import BlogList from '../../components/Blog/BlogList.js'; // Correct path to your BlogList.js

// Import BlogPostDetail (we'll modify this one next)
import BlogPostDetail from '../../components/Blog/BlogPostDetail.js'; // This path assumes it's directly under components

const Blog = () => {
  return (
    <section className="py-5">
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