import * as selectors from "../../../src/redux-modules/userInfo/selectors";
import { fromJS } from "immutable";
import { subDays, addDays, format } from "date-fns";

const yesterday = format(subDays(new Date(), 1), "MM/dd/yyyy H:mm:ss A");
const tomorrow = format(addDays(new Date(), 1), "MM/dd/yyyy H:mm:ss A");

const initialState = fromJS({
  signedIn: false,
  details: {}
});

const validSignInState = fromJS({
  signedIn: true,
  details: {
    Email: "email@test.com",
    FirstName: "Sample",
    IsActive: false,
    LastName: "User",
    Token: "342as5f2456efghbsdfgw4jq56w34z05",
    TokenExpireDate: tomorrow,
    UserID: 0,
    UserName: "user"
  }
});

const expiredTokenState = validSignInState.setIn(
  ["details", "TokenExpireDate"],
  yesterday
);

describe("userInfo selectors", () => {
  it("should return false with initial state", () => {
    const state = {
      userInfo: initialState
    };
    expect(selectors.isUserAuthenticated(state)).toEqual(false);
  });

  it("should return true with authenticated state", () => {
    const state = {
      userInfo: validSignInState
    };
    expect(selectors.isUserAuthenticated(state)).toEqual(true);
  });

  it("should not be authenticated if token is expired", () => {
    const state = {
      userInfo: expiredTokenState
    };
    expect(selectors.isUserAuthenticated(state)).toEqual(false);
  });

  it("Can return the user token", () => {
    const state = {
      userInfo: validSignInState
    };
    expect(selectors.getUserToken(state)).toEqual(
      "342as5f2456efghbsdfgw4jq56w34z05"
    );
  });

  it("Can return all user details", () => {
    const state = {
      userInfo: validSignInState
    };
    expect(selectors.getUserDetails(state)).toEqual(
      validSignInState.get("details").toJS()
    );
  });
});
