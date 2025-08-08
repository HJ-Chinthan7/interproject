import api from './api';


const serviceService = {
  getAllServices: async () => {
    const response = await api.post("/users/getAllServices");
    return response.data;
  },


  createService: async (data) => {
    const response = await api.post('/admin/createService', data);
    return response.data;
  },

 
  deleteService: async (id) => {
    const response = await api.delete(`/admin/deleteService/${id}`);
    return response.data;
  },
};

export default serviceService;
