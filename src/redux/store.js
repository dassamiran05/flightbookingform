import { createStore } from "redux";
import bookingReducer from "./booking/bookingReducer";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(bookingReducer);

export default store;
