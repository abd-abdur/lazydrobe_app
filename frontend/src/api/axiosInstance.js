// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://lazydrobe-23933613008.us-central1.run.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
