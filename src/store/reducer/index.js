import { getAllproductsReducer } from "./fetchAllProductReducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  getAllproductsReducer,
});
