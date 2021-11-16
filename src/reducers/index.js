import { combineReducers } from "redux";
import loadMoreCard from "./loadMore";
import cardList from "./cardList";
const rootReducer = combineReducers({
  loadMoreCard,
  cardList,
});

export default rootReducer;
