import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import blogService from '../../services/blogService';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogService.getAllBlogs();
      setBlogs(response.data);
    } catch (error) {
      setError('Failed to load blogs');
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading blogs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="blog-list">
      <h2>Latest Blog Posts</h2>
      <div className="blogs-grid">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
