import { getRequest } from './request';

export const getImage = () => {
  const url = 'v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';
  return getRequest(url);
};
