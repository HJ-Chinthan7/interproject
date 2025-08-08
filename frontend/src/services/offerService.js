import api from './api';


const offerService = {
  getAllOffers: async () => {
    const response = await api.post("/users/getAllOffers");
    return response.data;
  },



  createOffer: async (data) => {
    const response = await api.post('/admin/createOffer', data);
    return response.data;
  },


  deleteOffer: async (id) => {
    const response = await api.delete(`/admin/deleteOffer/${id}`);
    return response.data;
  },
};

export default offerService;
