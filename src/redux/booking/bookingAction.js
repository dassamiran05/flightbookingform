import { ADDITION, DELETION } from "./bookingActionType";

export const dataadd = (value) => {
  return {
    type: ADDITION,
    payload: value,
  };
};
export const datadelete = (id) => {
  return {
    type: DELETION,
    payload: id,
  };
};