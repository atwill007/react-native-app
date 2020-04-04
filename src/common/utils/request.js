import axios from 'axios';
import {REQUEST_CONFIG} from './constant';

const instance = axios.create({
  baseURL: REQUEST_CONFIG.BASE_URL,
  timeout: REQUEST_CONFIG.TIMEOUT,
  headers: {'X-Custom-Header': 'RN-test'},
});

//请求拦截处理
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

//返回拦截处理
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

const request = (method) => (api = '', params = {}) => {
  return new Promise((resolve, reject) => {
    if (method === 'get') params = {params};
    instance[method](api, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * get 方法
 */
export const axiosGet = request('get');
/**
 * post 方法
 */
export const axiosPost = request('post');
