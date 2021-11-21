const initialState = [];

const cardList = (state = initialState, action) => {
  if (action.type === "LIST") return action.payload;
  else return state;
};

export default cardList;
