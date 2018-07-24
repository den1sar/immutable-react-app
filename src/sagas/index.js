import { all } from 'redux-saga/effects';
import images from './images';


export default function* rootSaga() {
  yield all([
    images(),
  ]);
}
