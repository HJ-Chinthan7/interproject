import api from './api';

const contactService = {
  getAllContacts: async () => {
    const response = await api.post("/admin/contact-forms");
    return response.data;
  },


  addContact: async (data) => {
    const response = await api.post('/users/submitContactForm', data);
    return response.data;
  },
};

export default contactService;
