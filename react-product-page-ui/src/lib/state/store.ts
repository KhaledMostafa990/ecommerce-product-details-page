import { configureStore } from '@reduxjs/toolkit';

export const configureCustomStore = (initialState: any, reducer: any) => {
  const store = configureStore({
    reducer,
    preloadedState: initialState,
  });
  return store;
};
