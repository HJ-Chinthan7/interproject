import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.image || '/api/placeholder/400/250'} alt={blog.title} />
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{formatDate(blog.createdAt)}</span>
          <span className="blog-author">By {blog.author?.name || 'Admin'}</span>
        </div>
        <h3>{blog.title}</h3>
        <p className="blog-excerpt">{blog.content?.substring(0, 150)}...</p>
        <Link to={`/blogs/${blog._id}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
