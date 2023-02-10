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

// Add item to Cart action
const addCartItemAction = (state: any, action: PayloadAction<CartItem>) => {
  const item = action.payload;
  const itemExists = state.cartItems.find((i: any) => i.id === item.id);

  if (itemExists) {
    itemExists.quantity++;
  } else {
    state.cartItems.push({ ...item, quantity: 1 });
  }
};

const initialState: Cart = {
  cartItems: [],
};

const cartSlice = createSliceReducer('cart', initialState, {
  addCartItem: addCartItemAction,
});

export const cartReducer = cartSlice.reducer;
export const { addCartItem } = cartSlice.actions;
