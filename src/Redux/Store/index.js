import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import loginExampleSlice from "../Features/example.slice";
import verifyotpSlice from "../Features/verifyotp.slice";
import CategoryReducer from "../../Redux/Features/Product/CategorySlice";
import productReducer from "../../Redux/Features/Product/AddProductSlice";
// import usersReducer, { fetchUsers } from "../Features/user.slice";

const middlewares = [];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    example: loginExampleSlice,
    verifyOtp: verifyotpSlice,
    category: CategoryReducer,
    product: productReducer,
  },
  middleware: [...middlewares, thunk],
});

// store.dispatch(fetchUsers());

export default store;
