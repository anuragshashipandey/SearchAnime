import { combineReducers } from "redux";
import load from "./Load";
import cardList from "./cardList";
const rootReducer = combineReducers({
  load,
  cardList,
});

export default rootReducer;
