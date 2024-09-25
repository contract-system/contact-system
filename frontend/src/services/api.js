// src/api.js
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',  // Change to your Laravel API URL
});

// Get the CSRF token from the cookie and set it in the headers
const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
    api.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.content;
}

export default api;


