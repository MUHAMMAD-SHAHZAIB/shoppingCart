export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddCart":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {};
