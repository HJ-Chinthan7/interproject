import api from './api';

const blogService = {
  getAllBlogs: async () => {
    const response = await api.post('/users/getAllBlogs');
    console.log(response)
    return response.data;
  },
  
  getBlogById: async (id) => {
    const response = await api.post(`/users/getBlogById/${id}`);
    return response.data;
  },
  
  addBlog: async (blogData) => {
    const response = await api.post('/users/addBlog', blogData);
    return response.data;
  },
  
  deleteBlog: async (id) => {
    const response = await api.delete(`/users/blog/${id}`);
    return response.data;
  }
};

export default blogService;
