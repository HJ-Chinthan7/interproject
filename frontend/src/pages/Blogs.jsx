import React from 'react';
import BlogList from '../components/BlogList';
import '../styles/Blog.css';

const Blogs = () => {
  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1>Our Latest Blog Posts</h1>
        <p>Stay updated with the latest insights, tips, and stories from our team</p>
      </div>
      <BlogList />
    </div>
  );
};

export default Blogs;
