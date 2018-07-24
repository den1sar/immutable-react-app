import axios from 'axios';
import config from '_config';

const URL = config.api;

const universalRequest = (url, params, method) => {
  const newUrl = `${URL}${url}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  return axios({
    method,
    headers,
    url: newUrl,
    data: params,
  }).catch(error => (error.response.data));
};

const requestFn = method => (url, params = {}) => universalRequest(url, params, method);

export const getRequest = requestFn('get');
export const postRequest = requestFn('post');
