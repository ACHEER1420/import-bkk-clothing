import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

import shopActionTypes from './shop.types';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

export function* shopSagaFetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* shopSagaFetchCollectionStart() {
  // takeEvery() => create a non-blocking call

  // Our SAGA FetchCollection is listening to
  // FETCH_COLLECTION_START action from reducer
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTION_START,
    shopSagaFetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(shopSagaFetchCollectionStart)]);
}
