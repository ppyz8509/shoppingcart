import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productReducer'
import cartReducers from './carts/cartReducers'
export const store = configureStore({
    reducer: {
      products: productReducer,
       carts: cartReducers,
    },
    devTools: true,
  })