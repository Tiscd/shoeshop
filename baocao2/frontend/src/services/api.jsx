import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

export const getProducts = async () => axios.get(`${API_BASE}/products`).then(res => res.data);

export const getProductById = async (id) => axios.get(`${API_BASE}/products/${id}`).then(res => res.data);

export const getProductsByCategory = async (brand, filters = {}) => axios.get(`${API_BASE}/products`, { params: { brand, ...filters } }).then(res => res.data);

export const login = async (data) => axios.post(`${API_BASE}/login`, data).then(res => res.data);

export const register = async (data) => axios.post(`${API_BASE}/register`, data).then(res => res.data);

export const addProduct = async (data) => axios.post(`${API_BASE}/products`, data).then(res => res.data);

export const updateProduct = async (id, data) => axios.put(`${API_BASE}/products/${id}`, data).then(res => res.data);

export const deleteProduct = async (id) => axios.delete(`${API_BASE}/products/${id}`).then(res => res.data);