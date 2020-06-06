import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  incItemQuantity,
  decItemQuantity,
} from './cart.utils';

const INITIAL_STATE = {
  show: false,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        show: !state.show,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.INC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: incItemQuantity(state.cartItems, action.payload),
      };
    case CartActionTypes.DEC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decItemQuantity(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
