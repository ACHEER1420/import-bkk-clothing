import { all, call } from 'redux-saga/effects';

import { shopSagaFetchCollectionStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(shopSagaFetchCollectionStart)]);
}
