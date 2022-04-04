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
      console.log(action.payload)
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
      state.products.splice(
        state.products.indexOf(
          state.products.find((item) => item.product === action.payload.product)
        ),
        1
      );
      return;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
