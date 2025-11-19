// 示例：业务逻辑层 - apiService
// import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// class ApiService {
//   private api = axios.create({
//     baseURL: API_BASE_URL,
//     timeout: 10000,
//   });

//   constructor() {
//     // 请求拦截器
//     this.api.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // 响应拦截器
//     this.api.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response?.status === 401) {
//           // 处理未授权
//           localStorage.removeItem('token');
//           window.location.href = '/login';
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   // 用户相关API
//   async getUser(id: string) {
//     const response = await this.api.get(`/users/${id}`);
//     return response.data;
//   }

//   async updateUser(id: string, data: any) {
//     const response = await this.api.put(`/users/${id}`, data);
//     return response.data;
//   }

//   // 项目相关API
//   async getProjects() {
//     const response = await this.api.get('/projects');
//     return response.data;
//   }

//   async createProject(data: any) {
//     const response = await this.api.post('/projects', data);
//     return response.data;
//   }
// }

// export const apiService = new ApiService();
