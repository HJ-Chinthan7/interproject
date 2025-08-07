import api from './api';

const blogService = {
  // Get all blogs
  getAllBlogs: async () => {
    try {
      const response = await api.get('/blogs');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single blog by ID
  getBlogById: async (id) => {
<|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><create_file>
<path>frontend/src/services/blogService.js</path>
<content>
import api from './api';

const blogService = {
  // Get all blogs
  getAllBlogs: async () => {
    try {
      const response = await api.get('/blogs');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single blog by ID
  getBlogById: async (id) => {
    try {
      const response = await api.get(\`/blogs/\${id}\`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create new blog
  createBlog: async (blogData) => {
    try {
      const response = await api.post('/blogs', blogData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Update blog
  updateBlog: async (id, blogData) => {
    try {
      const response = await api.put(\`/blogs/\${id}\`, blogData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Delete blog
  deleteBlog: async (id) => {
    try {
      const response = await api.delete(\`/blogs/\${id}\`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default blogService;
