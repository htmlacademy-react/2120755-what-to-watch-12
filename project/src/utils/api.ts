import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';

const BACKEND_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER,
            toastId: 2,
          });
        } else {
          toast.info(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1,
            delay: 6000,
            theme: 'dark'
          });
        }
      }
      throw error;
    }
  );

  return api;
};


