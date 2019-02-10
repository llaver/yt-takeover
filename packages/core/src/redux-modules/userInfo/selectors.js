import { createSelector } from "reselect";
import { parse, isBefore } from "date-fns";

const userInfo = state => state.userInfo;

export const isUserAuthenticated = createSelector(userInfo, userInfo => {
  console.log("userinfo", userInfo);
  if (!userInfo.get("signedIn")) return false;

  const token = userInfo.getIn(["details", "TokenExpireDate"]);
  const tokenExpireDate = parse(token, "MM/dd/yyyy H:mm:ss A", new Date());

  return isBefore(tokenExpireDate, new Date())
    ? false
    : userInfo.get("signedIn");
});

export const getUserToken = createSelector(userInfo, userInfo =>
  userInfo.getIn(["details", "Token"])
);

export const getUserDetails = createSelector(userInfo, userInfo =>
  userInfo.get("details").toJS()
);
