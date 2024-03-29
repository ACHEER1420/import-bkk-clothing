import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const incQuantity = (id) => ({
  type: CartActionTypes.INC_ITEM_QUANTITY,
  payload: id,
});

export const decQuantity = (id) => ({
  type: CartActionTypes.DEC_ITEM_QUANTITY,
  payload: id,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
