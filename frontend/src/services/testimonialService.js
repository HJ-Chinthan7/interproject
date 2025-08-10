import api from './api';


const testimonialService = {
  getAllTestimonials: async () => {
    const response = await api.post("/users/getAllTestimonials");
    return response.data;
  },

  deleteTestimonial: async (id) => {
    const response = await api.delete(`/admin/deleteTestimonial/${id}`);
    return response.data;
  },

  addTestimonial: async (data) => {
    const response = await api.post('/admin/addtestimonial', data);
    return response.data;
  },
};

export default testimonialService;
