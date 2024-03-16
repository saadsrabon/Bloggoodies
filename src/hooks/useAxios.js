import {  useEffect } from 'react';
import axios from 'axios';
import { axiosApi } from './../axios/axiosApi';

const useAxiosWithAuth = () => {
  

  useEffect(() => {
    // Create a new Axios instance
  

    // Add a request interceptor
    const requestInterceptor = axiosApi.interceptors.request.use(
      (config) => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    const responseInterceptor = axiosApi.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        // If response status is 401 and it's not a retry
        if (error.response && error.response.status === 401 || error.response.status===403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Get refresh token from local storage
            const refreshToken = localStorage.getItem('refreshToken');

            // Request new access token using the refresh token
            const response = await axios.post('http://localhost:3000/auth/refresh-token', { refreshToken });

            // If refresh token is successful, update access token
            const { token } = response.data;
            if (token) {
              localStorage.setItem('token', token.accessToken);
              originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;
              return axios(originalRequest); // Retry original request with new access token
            }
          } catch (error) {
            console.error('Error refreshing token:', error);
            // Handle token refresh failure or logout
          }
        }
        return Promise.reject(error);
      }
    );

    

    // Cleanup interceptors when component unmounts
    return () => {
      axiosApi.interceptors.request.eject(requestInterceptor);
      axiosApi.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosApi;
};

export default useAxiosWithAuth;
