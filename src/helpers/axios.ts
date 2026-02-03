import { alertToast } from '@/helpers';
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import ty from 'typy';

export const JWT_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
export const TOKEN_PREFIX = 'Bearer ';

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.withCredentials = false;
axios.defaults.timeout = 600000; // 10 minutes

declare module 'axios' {
  export interface AxiosRequestConfig {
    _withAuth?: boolean;
    _retry?: boolean;
    _excludeErrors?: string[];
  }
}

// Request Interceptor
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config._withAuth) {
      const token = localStorage.getItem(JWT_KEY);
      if (token) {
        config.headers.Authorization = TOKEN_PREFIX + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError<any>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle Network Error
    if (error.code === 'ERR_NETWORK' || error.message?.includes('Network Error')) {
      alertToast('error', "Network error, can't reach the server this time");
      return Promise.reject(error);
    }

    if (!error.response) {
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    let errorMsg: null | string | string[] = null;

    if (!ty(data, 'message').isNullOrUndefined) {
      const message = data?.message;
      if (Array.isArray(message)) {
        errorMsg = message.map((msgObj) => ty(msgObj).safeString);
      } else {
        errorMsg = ty(message).safeString;
      }
      if (originalRequest._excludeErrors?.includes(message)) {
        return Promise.reject(error);
      }
    }

    if (errorMsg === null) {
      // handle global message based on error code
      switch (status) {
        case 400:
          errorMsg = 'Bad Request. Please check your input.';
          break;
        case 403:
          errorMsg = 'You do not have permission to perform this action.';
          break;
        case 404:
          errorMsg = 'The requested resource was not found.';
          break;
        case 500:
          errorMsg = 'Internal Server Error. Please try again later.';
          break;
        case 502:
          errorMsg = 'Bad Gateway. Please try again later.';
          break;
        case 503:
          errorMsg = 'Service Unavailable. Please try again later.';
          break;
        case 504:
          errorMsg = 'Gateway Timeout. Please try again later.';
          break;
        default:
          errorMsg = `An unexpected error occurred (Status Code: ${status}).`;
      }
    }

    if (Array.isArray(errorMsg)) {
      errorMsg.forEach((msg) => {
        alertToast('error', msg, msg);
      });
    } else {
      alertToast('error', errorMsg, errorMsg);
    }

    return Promise.reject(error);
  },
);

export function endpointUrl(url = '') {
  return `${process.env.NEXT_PUBLIC_API_URL}${url.toString().replace(/^\//, '')}`;
}

export function getStaticEndpoint(url = '') {
  return `${process.env.NEXT_PUBLIC_STATIC_URL}${url.toString().replace(/^\//, '')}`;
}

export function httpGet(url: string, withAuth = false, params = {}, configs: AxiosRequestConfig = {}) {
  return axios.get(url, { ...configs, params, _withAuth: withAuth });
}

export const httpPost = (url: string, data: any, withAuth = false, configs: AxiosRequestConfig = {}) => {
  return axios.post(url, data, { ...configs, _withAuth: withAuth });
};

export const httpPut = (url: string, data: any, withAuth = false, configs: AxiosRequestConfig = {}) => {
  return axios.put(url, data, { ...configs, _withAuth: withAuth });
};

export const httpPatch = (url: string, data: any, withAuth = false, configs: AxiosRequestConfig = {}) => {
  return axios.patch(url, data, { ...configs, _withAuth: withAuth });
};

export function httpDelete(url: string, withAuth = false, params = {}, configs: AxiosRequestConfig = {}) {
  return axios.delete(url, { ...configs, params, _withAuth: withAuth });
}

export default axios;
