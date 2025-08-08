import api from './api';

export const getAllPricing = async () => {
  const response = await api.post('/users/getAllPricingPlans');
  return response.data;
};

export const addPricing = async (pricingData) => {
  const response = await api.post('admin/pricing', pricingData);
  return response.data;
};

export const deletePricing = async (id) => {
  const response = await api.delete(`/admin/deletePricing/${id}`);
  return response.data;
};
