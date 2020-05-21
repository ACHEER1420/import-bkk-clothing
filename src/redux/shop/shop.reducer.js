import ShopActionTypes from './shop.types';
import SHOP_DATA from './shop.data';

const INIT_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
