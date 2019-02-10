import reducer from "../../../../src/redux-modules/screens/sign-in/reducer";
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from "../../../../src/redux-modules/screens/sign-in/actions";
import {
  AUTHENTICATE_USER,
  TOKEN_RECEIVED,
  AUTHENTICATION_FAILED
} from "../../../../src/redux-modules/userInfo/actions";
import Immutable from "immutable";

describe("screens reducer", () => {
  it("Defaults to blank strings", () => {
    const newState = reducer(undefined, {});
    expect(newState.get("password")).toEqual("");
    expect(newState.get("username")).toEqual("");
  });

  it("handles changes for username", () => {
    let newState = reducer(undefined, {
      type: USERNAME_CHANGED,
      value: "a"
    });
    newState = reducer(undefined, {
      type: USERNAME_CHANGED,
      value: "ab"
    });
    expect(newState.get("username")).toEqual("ab");
  });

  it("handles changes for password", () => {
    let newState = reducer(undefined, {
      type: PASSWORD_CHANGED,
      value: "a"
    });
    newState = reducer(undefined, {
      type: PASSWORD_CHANGED,
      value: "ab"
    });
    expect(newState.get("password")).toEqual("ab");
  });

  it("resets values when token received", () => {
    let newState = reducer(undefined, {
      type: PASSWORD_CHANGED,
      value: "ab"
    });
    newState = reducer(newState, {
      type: USERNAME_CHANGED,
      value: "ab"
    });
    newState = reducer(newState, {
      type: TOKEN_RECEIVED,
      value: "ab"
    });

    expect(newState.get("username")).toEqual("");
    expect(newState.get("password")).toEqual("");
  });

  it("defaults to not loading", () => {
    const newState = reducer(undefined, {});
    expect(newState.get("loading")).toEqual(false);
  });

  it("loads when started", () => {
    const newState = reducer(undefined, {
      type: AUTHENTICATE_USER
    });
    expect(newState.get("loading")).toEqual(true);
  });

  it("Loading stops eventually", () => {
    let newState = reducer(undefined, {
      type: AUTHENTICATE_USER
    });
    newState = reducer(newState, {
      type: TOKEN_RECEIVED
    });
    expect(newState.get("loading")).toEqual(false);

    // restart
    newState = reducer(undefined, {
      type: AUTHENTICATE_USER
    });
    newState = reducer(newState, {
      type: AUTHENTICATION_FAILED
    });
    expect(newState.get("loading")).toEqual(false);
  });
});
