import reducer from "../../../src/redux-modules/userInfo/reducer";
import {
  TOKEN_RECEIVED,
  TOKEN_REVOKED
} from "../../../src/redux-modules/userInfo/actions";

describe("userInfo Reducer", () => {
  it("Defaults to not signed in", () => {
    const newState = reducer(undefined, {});
    expect(newState.get("signedIn")).toEqual(false);
  });

  it("will sign a user in", () => {
    const newState = reducer(undefined, {
      type: TOKEN_RECEIVED,
      user: {
        Token: "342as5f2456efghbsdfgw4jq56w34z05",
        username: "User"
      }
    });
    expect(newState.get("signedIn")).toEqual(true);
    expect(newState.getIn(["details", "Token"])).toEqual(
      "342as5f2456efghbsdfgw4jq56w34z05"
    );
    expect(newState.getIn(["details", "UserName"])).toEqual("User");
  });

  it("will sign out a user", () => {
    const newState = reducer(undefined, {
      type: TOKEN_REVOKED
    });
    expect(newState.get("signedIn")).toEqual(false);
    expect(newState.get("details").toJS()).toEqual({});
  });
});
