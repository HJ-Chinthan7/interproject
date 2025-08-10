import api from './api';

const contactService = {
  getAllContacts: async () => {
    const response = await api.post("/users/getAllContacts");
    return response.data;
  },


  addContact: async (data) => {
    const response = await api.post('/users/addContact', data);
    return response.data;
  },
};

export default contactService;
