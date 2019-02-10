import { call, put, takeEvery, select } from "redux-saga/effects";
import "isomorphic-fetch";
import {
  AUTHENTICATE_USER,
  TOKEN_RECEIVED,
  AUTHENTICATION_FAILED
} from "../../userInfo/actions";
import { getUsername, getPassword } from "./selectors";
const authenticateUrl =
  process.env["REACT_APP_DATA_ENV"] === "production"
    ? "prodTokenAuthURL/Authenticate"
    : "stageTokenAuthURL/Authenticate";

const authenticate = async (username, password) => {
  const response = await fetch(authenticateUrl, {
    headers: {
      "X-Username": username,
      "X-Password": password,
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw new Error("There was a problem with the username and/or password");
  }
};

export function* fetchToken() {
  try {
    const username = yield select(getUsername);
    const password = yield select(getPassword);
    const user = yield call(authenticate, username, password);
    yield put({ type: TOKEN_RECEIVED, user: user });
  } catch (e) {
    yield put({ type: AUTHENTICATION_FAILED, message: e.message });
  }
}

function* authenticateUserSaga() {
  yield takeEvery(AUTHENTICATE_USER, fetchToken);
}

export default [authenticateUserSaga];
