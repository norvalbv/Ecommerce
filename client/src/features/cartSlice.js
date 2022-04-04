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
        image: action.payload.image,
        image_alt: action.payload.image_alt,
      });
      return;
    },
    removeProduct(state, action) {
      state.totalPrice = state.totalPrice - action.payload.price;
      state.quantity--;
      // const i = state.products.filter(
      //   (item) => item.product !== action.payload.product
      // );
      const i = state.products.pop();
      console.log(state.products);
      console.log(i);
      return;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
