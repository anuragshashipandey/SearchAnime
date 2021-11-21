const initialState = 1;
const load = (state = initialState, action) => {
  if (action.type === "LOAD") return state + 1;
  else if (action.type === "RESET") return (state = 1);
  else return state;
};

export default load;
