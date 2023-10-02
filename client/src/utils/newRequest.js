import axios from 'axios';

const newRequest = axios.create({
  baseURL: 'https://k5jixdmaeeowmpo366me2jlhca0vezpo.lambda-url.ap-northeast-1.on.aws/api/',
});

newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default newRequest;
