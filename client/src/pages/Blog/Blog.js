// client/src/pages/Blog/Blog.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown
import { Container } from 'react-bootstrap'; // Import Container for consistent layout

function Blog() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch('/content/blog/intro.md'); // Fetch the blog intro Markdown
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        setContent(text);
      } catch (err) {
        console.error("Failed to load blog markdown content:", err);
        setError("Failed to load blog content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, []);

  if (loading) {
    return <div className="container my-5 text-center">Loading blog content...</div>;
  }

  if (error) {
    return <div className="container my-5 text-center text-danger">{error}</div>;
  }

  return (
    <Container className="my-5"> {/* Using Bootstrap Container for consistent padding */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      {/* You can add a list of blog post summaries/links here later */}
    </Container>
  );
}

export default Blog;
