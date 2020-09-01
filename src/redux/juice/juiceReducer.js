import { BUY_JUICE } from "./juiceTypes";

const initialState = {
  numOfJuice: 25,
};

const juiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE:
      return {
        ...state,
        numOfJuice: state.numOfJuice - 1,
      };
    default:
      return state;
  }
};

export default juiceReducer;
