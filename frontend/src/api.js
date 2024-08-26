// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Base URL for API endpoints
  timeout: 1000,
});

export default api;
