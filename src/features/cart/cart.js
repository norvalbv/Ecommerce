// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     totalPrice: 0,
//   },
//   reducers: {
//     addProduct : (state, action) => {
//       state.products.push(action.payload.products);
//       state.quantity += action.payload.quantity;
//       state.totalPrice += action.payload.totalPrice;
//     },
//   },
// });

const initialState = {
  products: [],
  quantity: null,
  totalPrice: 0,
};

export const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case "addProduct":
      return {
          ...state,
          quantity: state.quantity + 1,
      };
    case "removeProduct":
        return {
            ...state,
            quantity: state.quantity - 1,
        }
    default:
      return state;
  }
};

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;

export default cartSlice;
