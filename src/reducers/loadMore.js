const initialState = 16;
const loadMoreCard = (state = initialState, action) => {
  if (action.type == "LOAD") {
    return state + 16;
  } else if (action.type == "RESET") return (state = initialState);
  else return state;
};

export default loadMoreCard;
