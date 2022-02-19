import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cart/cart";

export default configureStore({
  reducer: {
    cart,
  },
});
