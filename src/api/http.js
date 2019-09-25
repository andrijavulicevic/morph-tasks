import axios from 'axios';
import { API_URL, API_KEY } from './config';

const http = axios.create({
  baseURL: API_URL
});

http.interceptors.request.use(config => {
  config.params.key = API_KEY
  return config;
});

export default http;
