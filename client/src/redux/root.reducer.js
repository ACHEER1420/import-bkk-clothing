import { combineReducers } from 'redux';

// Already persist store now persist Reducer
import { persistReducer } from 'redux-persist';
/**
 * this will umport type storage we want | this one will import LocalStorage
 * If want to use sessionStorage will be another path and function
 */
import storage from 'redux-persist/lib/storage'; 

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// where will we want to start store our reducer? :key
// where will we want to store?: storage - i.e. localStorage
// whitelist is the array store any reducer we want
const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);