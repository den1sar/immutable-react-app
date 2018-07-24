import HomePage from '_pages/HomePage';
import App from './app';

import { getImageSaga } from '_sagas/images';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
        sagasToRun: [
          getImageSaga,
        ],
      },
    ],
  },
];
