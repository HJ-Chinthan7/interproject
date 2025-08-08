import api from './api';


const collaborationService = {
  getAllCollaborations: async () => {
    const response = await api.post("/users/getAllCollaborations");
    return response.data;
  },

  deleteCollaboration: async (id) => {
    const response = await api.delete(`/admin/deleteCollaboration/${id}`);
    return response.data;
  },

   addCollaboration: async (data) => {
    const response = await api.delete('/users/getAllCollaborations',data);
    return response.data;
  },
};

export default collaborationService;
