import axios from 'axios';
import queryString from 'query-string';
import config from '_config';

const URL = config.api;

const universalRequest = (url, params, method) => {
  const newUrl = `${URL}${url}`;
  const requestUrl = method === 'post' ? newUrl : `${newUrl}?${queryString.stringify(params)}`;

  return axios({
    method,
    url: requestUrl,
    data: params,
  }).catch(error => (error.response.data));
};

const requestFn = method => (url, params = {}) => universalRequest(url, params, method);

export const getRequest = requestFn('get');
export const postRequest = requestFn('post');
