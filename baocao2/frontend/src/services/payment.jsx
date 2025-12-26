import axios from 'axios';

export const processPayment = async (data) => {
  const response = await axios.post('http://localhost:8000/api/orders', data);
  return response.data;
};