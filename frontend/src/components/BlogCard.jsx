import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Blog.css';

const BlogCard = ({ blog, onDelete }) => {
  const { user } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return <span className="status-badge published">Published</span>;
      case 'draft':
        return <span className="status-badge draft">Draft</span>;
      case 'archived':
        return <span className="status-badge archived">Archived</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

  const canDelete = () => {
    if (!user) return false;
    const isAuthor = blog.author?.firstName === user.firstName;
    const isAdmin = user.role === 'admin';
    return isAuthor || isAdmin;
  };

  const handleDelete = async () => {
    if (!canDelete()) return;

    setIsDeleting(true);
    try {
      await onDelete(blog._id);
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="blog-card">
      {canDelete() && (
        <button 
          className="blog-delete-btn"
          onClick={() => setShowDeleteModal(true)}
          aria-label="Delete blog"
        >
          <span className="delete-icon">×</span>
        </button>
      )}

      <div className="blog-image">
        <img src={blog.image || '/api/placeholder/400/250'} alt={blog.title} />
      </div>
      
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{formatDate(blog.createdAt)}</span>
          <span className="blog-author">By {blog.author?.firstName || 'Unknown'}</span>
          {blog.status && getStatusBadge(blog.status)}
        </div>
        
        <h3 className="blog-title">{blog.title}</h3>
        
        <p className="blog-content-full">{blog.content}</p>
        
        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-tags">
            <span className="tags-label">Tags:</span>
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="blog-actions">
          <Link to={`/display/${blog._id}`} className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>

    
      {showDeleteModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete "{blog.title}"?</p>
            <p className="delete-warning">This action cannot be undone.</p>
            
            <div className="delete-modal-actions">
              <button 
                className="btn-cancel" 
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button 
                className="btn-delete" 
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
