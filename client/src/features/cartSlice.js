import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.totalPrice = state.totalPrice + action.payload.price;
      state.quantity++;
      state.products.push({
        product: action.payload.product,
        size: action.payload.size,
        price: action.payload.price,
      });
      return;
    },
    removeProduct(state, action) {
      state.totalPrice = state.totalPrice - action.payload.price;
      state.quantity--;
      state.products.filter((item) => item.product !== action.payload.product);
      return;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
