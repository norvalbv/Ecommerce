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
  products: [
    {
      item1: {
        desc: "lorem asd asd assad",
        title: "asd sad d",
        size: "m",
        img: "add",
      },
    },
    {
      item2: {
        desc: "lorem asd assad",
        title: "asd d",
        size: "s",
        img: "addsd",
      },
    },
    {
      item3: {
        desc: " asd assad",
        title: "sad d",
        size: "wcerws",
        img: "adwecrwerdsd",
      },
    },
  ],
  quantity: 3,
  totalPrice: 40.19,
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
        products: state.products.filter((item) => item !== action.payload)
      };
    default:
      return state;
  }
};

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;

export default cartSlice;
