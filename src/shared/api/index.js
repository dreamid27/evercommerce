import axios from 'axios';

const apiUrl = 'https://5fcb826551f70e00161f1aa6.mockapi.io/api/v1/products';
export const getProducts = (params) => axios.get(apiUrl, { params });
export const getProduct = (id) => axios.get(`${apiUrl}/${id}`);
