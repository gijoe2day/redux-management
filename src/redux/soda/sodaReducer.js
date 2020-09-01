const { BUY_SODA } = require("./sodaTypes");

const initialState = {
  numOfSodas: 30,
};

const sodaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SODA:
      return {
        ...state,
        numOfSodas: state.numOfSodas - 1,
      };
    default:
      return state;
  }
};

export default sodaReducer;
