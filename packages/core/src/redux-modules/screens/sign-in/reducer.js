import { createReducer } from "redux-create-reducer";
import { fromJS } from "immutable";
import * as actions from "./actions";
import userInfo from "../../userInfo";

const reducer = {};
const initialState = fromJS({
  username: "",
  password: "",
  loading: false,
  error: false
});

reducer[actions.USERNAME_CHANGED] = (state, event) => {
  return state.set("username", event.value);
};
reducer[actions.PASSWORD_CHANGED] = (state, event) => {
  return state.set("password", event.value);
};

reducer[userInfo.actions.TOKEN_RECEIVED] = (state, event) => initialState;
reducer[userInfo.actions.AUTHENTICATE_USER] = (state, event) => {
  return state.set("loading", true);
};
reducer[userInfo.actions.AUTHENTICATION_FAILED] = (state, event) => {
  return state.set("loading", false).set("error", true);
};
export default createReducer(initialState, reducer);
