import React, { useState } from 'react';
import blogService from '../../services/blogService';

const AddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    tags: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({
      ...prev,
      tags
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await blogService.createBlog(formData);
      onBlogAdded();
      setFormData({
        title: '',
        content: '',
        image: '',
        tags: []
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-blog-form">
      <h3>Add New Blog Post</h3>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags.join(', ')}
            onChange={handleTagsChange}
            placeholder="tag1, tag2, tag3"
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Blog'}
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
