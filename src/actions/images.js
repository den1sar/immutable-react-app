import { ADD_IMAGE, GET_IMAGE } from './constants';

export const getImage = () => ({
  type: GET_IMAGE,
});

export const addImage = payload => ({
  type: ADD_IMAGE,
  payload,
});
