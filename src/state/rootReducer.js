import { combineReducers } from "redux";
import weatherReducer from "./weather";

export default combineReducers({
  weatherInfo: weatherReducer
});
