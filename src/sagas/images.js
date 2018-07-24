import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as api from '_api/images';
import { addImage } from '_actions/images';

import { GET_IMAGE } from '_constants';

export function* getImageSaga() {
  try {
    const answer = yield call(api.getImage);
    const { status, data } = answer;

    if (status === 200 && data) {
      yield put(addImage(data.data.image_original_url));
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
}

export default function* () {
  yield all([
    takeLatest(GET_IMAGE, getImageSaga),
  ]);
}
