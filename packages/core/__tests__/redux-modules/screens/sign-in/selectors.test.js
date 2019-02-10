import * as selectors from "../../../../src/redux-modules/screens/sign-in/selectors";
import { fromJS } from "immutable";

const initialState = {
  loading: false,
  username: "",
  password: ""
};

const editingState = {
  loading: false,
  username: "user",
  password: "password"
};

const loadingState = {
  loading: true,
  username: "user",
  password: "password"
};

describe("sign in screen selectors", () => {
  it("initial state", () => {
    const state = {
      screenSignIn: fromJS(initialState)
    };
    expect(selectors.isLoading(state)).toEqual(false);
    expect(selectors.getUsername(state)).toEqual("");
    expect(selectors.getPassword(state)).toEqual("");
  });

  it("editing state", () => {
    const state = {
      screenSignIn: fromJS(editingState)
    };
    expect(selectors.isLoading(state)).toEqual(false);
    expect(selectors.getUsername(state)).toEqual("user");
    expect(selectors.getPassword(state)).toEqual("password");
  });

  it("loading state", () => {
    const state = {
      screenSignIn: fromJS(loadingState)
    };
    expect(selectors.isLoading(state)).toEqual(true);
    expect(selectors.getUsername(state)).toEqual("user");
    expect(selectors.getPassword(state)).toEqual("password");
  });
});
