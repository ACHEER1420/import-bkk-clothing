export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If adding existing item
  if (existingCartItem) {
    // return newItems[] with updated qty
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  }

  // If adding new item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

export const incItemQuantity = (cartItem, id) => {
  return cartItem.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
};

export const decItemQuantity = (cartItem, id) => {
  return cartItem.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
};
