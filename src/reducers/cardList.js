const initialState = 0;

const cardList = (state = initialState, action) => {
  if (action.type == "LIST") {
    console.log("actions", action.payload);
    return action.payload;
  } else return state;
};

export default cardList;
