import React, { useState, useEffect, useCallback } from 'react';
import BlogCard from './BlogCard';
import blogService from '../services/blogService';
import '../styles/Blog.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await blogService.getAllBlogs();
      setBlogs(response.data);
    } catch (error) {
      setError('Failed to load blogs');
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDelete = useCallback(async (blogId) => {
    try {
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
      await blogService.deleteBlog(blogId);
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog. Please try again.');
      
    
      await fetchBlogs();
    }
  }, [fetchBlogs]);

  const handleRefresh = async () => {
    setLoading(true);
    await fetchBlogs();
  };

  if (loading && blogs.length === 0) return <div className="loading">Loading blogs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="blog-list">
      <div className="blog-list-header">
        <h2>Latest Blog Posts</h2>
        <button onClick={handleRefresh} className="refresh-btn" disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {blogs.length === 0 ? (
        <div className="no-blogs">
          <p>No blog posts found.</p>
        </div>
      ) : (
        <div className="blogs-grid">
          {blogs.map(blog => ( 
            <BlogCard 
              key={blog._id} 
              blog={blog} 
              onDelete={handleDelete}
              onRefresh={fetchBlogs}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
