import HomePage from '_pages/HomePage';
import App from './app';


export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
    ],
  },
];
