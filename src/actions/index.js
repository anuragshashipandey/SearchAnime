export const loadMore = () => {
  return {
    type: "LOAD",
  };
};
export const setList = (payload) => {
  return {
    type: "LIST",
    payload: payload,
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};
