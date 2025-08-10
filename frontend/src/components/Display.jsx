import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogService from '../services/blogService';
import '../styles/Blog.css';

const Display = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await blogService.getBlogById(id);
        setBlog(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="display-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="display-container">
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
          <Link to="/blogs" className="back-button">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="display-container">
        <div className="not-found">
          <h2>Blog not found</h2>
          <Link to="/blogs" className="back-button">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="display-container">
      <article className="blog-display">
        <div className="display-content">
          <h1 className="display-title">{blog.title}</h1>
          
          <div className="display-meta">
            <span className="display-author">By {blog.author?.name || 'Admin'}</span>
          </div>

          <div className="display-content-full">
            <p className="blog-content-text">{blog.content}</p>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="display-tags">
              <div className="tag-list">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="display-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="display-footer">
            <p className="display-date">
              Created: {formatDate(blog.createdAt)}
            </p>
            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
              <p className="display-updated">
                Updated: {formatDate(blog.updatedAt)}
              </p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Display;
