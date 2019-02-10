import { createReducer } from "redux-create-reducer";
import { fromJS } from "immutable";
import * as actions from "./actions";

const reducer = {};
const initialState = fromJS({
  signedIn: false,
  details: {}
});

reducer[actions.TOKEN_RECEIVED] = (state, event) => {
  return state
    .set("signedIn", true)
    .set("details", fromJS(event.user));
};

reducer[actions.TOKEN_REVOKED] = (state, event) => {
  return initialState;
};

export default createReducer(initialState, reducer);
