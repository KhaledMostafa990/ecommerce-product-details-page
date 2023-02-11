import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceReducer } from '../lib/state/createSliceReducer';

export interface CartItem {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const initialState: Cart = {
  cartItems: [],
};

const cartSlice = createSliceReducer('cart', initialState, {
  addCartItem: addCartItemAction,
  removeCartItem: removeCartItemAction,
});

export const cartReducer = cartSlice.reducer;
export const { addCartItem, removeCartItem } = cartSlice.actions;

// Cart Actions

// Add item to Cart action
function addCartItemAction(state: Cart, action: PayloadAction<CartItem>) {
  const item = action.payload;
  const itemExists = state.cartItems.find((i: any) => i.id === item.id);

  if (item.quantity === 0) return;

  if (itemExists) {
    itemExists.quantity += item.quantity;
  } else {
    state.cartItems.push({ ...item, quantity: item.quantity });
  }
}

// Remove item from Cart action
function removeCartItemAction(state: Cart, action: PayloadAction<CartItem>) {
  const item = action.payload;
  const itemExists = state.cartItems.find((i: any) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity--;
  }

  if (itemExists && itemExists.quantity <= 0) {
    state.cartItems = state.cartItems.filter((i: any) => i.id !== item.id);
  }
}
