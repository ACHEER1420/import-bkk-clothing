import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

/**
 * Keep fetchCollectionStartAsync to be a reference
 * shows how to use Redux Thunk
 */
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());

    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(
      (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      },
      (error) => {
        dispatch(fetchCollectionFailure(error.message));
      }
    );
  };
};
