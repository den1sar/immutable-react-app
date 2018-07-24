import { createSelector } from 'reselect';

export const imagesSelector = state => state.get('images');

export const imageSelector = createSelector(
  imagesSelector,
  images => images.get('imageUrl'),
);
