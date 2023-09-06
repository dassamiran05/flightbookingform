import { ADDITION, DELETION } from "./bookingActionType";

const initialState = {
  values: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {
        ...state,
        values: [
          ...state.values,
          { ...action.payload, id: state.values.length + 1 },
        ],
      };
    case DELETION:
      return {
        ...state,
        values: state.values.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default bookingReducer;
