import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import loginReducer from "./loginReducers";
import productReducer from "./productReducers";
import userReducer from "./userReducers";

export default combineReducers({
  Products: productReducer,
  Users: userReducer,
  Carts: cartReducer,
  Logins: loginReducer,
});
