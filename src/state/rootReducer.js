import { combineReducers } from "redux-immutable";
import weatherReducer from "./weather";

export default combineReducers({
  weatherInfo: weatherReducer
});
