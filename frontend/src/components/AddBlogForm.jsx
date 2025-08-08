import React, { useState } from 'react';
import blogService from '../services/blogService';
import '../formsStyle/BlogForm.css';

const AddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    status: 'draft'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({
      ...prev,
      tags
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
     
      const blogData = {
        title: formData.title,
        content: formData.content,
        tags: formData.tags,
        status: formData.status
      };
      
      await blogService.addBlog(blogData);
      setSuccess('Blog post added successfully!');
      setError(''); 
      
      
      setFormData({
        title: '',
        content: '',
        tags: [],
        status: 'draft'
      });
      
      if (onBlogAdded) {
        onBlogAdded();
      }
      
      
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add blog');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-blog-form">
      <div className="form-container">
        <h3>Add New Blog Post</h3>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter an engaging blog title"
              required
              maxLength="200"
            />
            <div className="character-counter">
              {formData.title.length}/200
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="8"
              placeholder="Write your blog content here..."
              required
              maxLength="5000"
            />
            <div className="character-counter">
              {formData.content.length}/5000
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags.join(', ')}
              onChange={handleTagsChange}
              placeholder="technology, web development, react"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="loading"></span>
                Adding Blog...
              </>
            ) : (
              'Add Blog Post'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
