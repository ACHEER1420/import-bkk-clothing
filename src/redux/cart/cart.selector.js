import { createSelector } from 'reselect';

// input selector
// output selector - use createSelector and inputSelector to build

// selector is the state that get the whole state and return a slice of it
const selectCart = (state) => state.cart;

export const selectCartShow = createSelector([selectCart], (cart) => cart.show);

export const selectCartItems = createSelector(
  [selectCart], //state.cart to input
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems], // selectCartItems is an input so [] of cartItems is an input
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
