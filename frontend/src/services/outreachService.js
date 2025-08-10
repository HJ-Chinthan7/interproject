import api from './api';


const outreachService = {
  getAllOutreach: async () => {
    const response = await api.post("/users/getAllOutreach");
    return response.data;
  },


  createOutreach: async (data) => {
    const response = await api.post('/admin/addOutreach', data);
    return response.data;
  },


  deleteOutreach: async (id) => {
    const response = await api.delete(`/admin/deleteOutreach/${id}`);
    return response.data;
  },
};

export default outreachService;
