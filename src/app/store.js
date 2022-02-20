import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cartSlice";
import user from "../features/userSlice";

export default configureStore({
  reducer: {
    cart,
    user,
  },
});
