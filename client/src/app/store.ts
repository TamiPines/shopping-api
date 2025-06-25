import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categories/categorySlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
     cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
