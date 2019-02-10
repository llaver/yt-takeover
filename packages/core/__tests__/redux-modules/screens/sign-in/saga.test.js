import fetchMock from "fetch-mock";
import { takeEvery, delay } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { fromJS } from "immutable";
import {
  AUTHENTICATE_USER,
  TOKEN_RECEIVED,
  AUTHENTICATION_FAILED
} from "../../../../src/redux-modules/userInfo/actions";
import { fetchToken } from "../../../../src/redux-modules/screens/sign-in/sagas";
import { runSaga } from "redux-saga";

describe("Authentication", () => {
  afterEach(fetchMock.restore);

  it("Should authenticate with correct password", async done => {
    fetchMock.mock({
      matcher: "StageAuthCheck/authenticate",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Username": "user-user-user",
        "X-Password": "PASSWORD"
      },
      response: {
        status: 200,
        body: {
          Email: "email@test.com",
          IsActive: false,
          Token: "342as5f2456efghbsdfgw4jq56w34z05",
          TokenExpireDate: "2/08/2019 2:00:00 AM",
          UserID: 0,
          UserName: "User"
        }
      }
    });

    const dispatched = [];

    const saga = await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
        getState: () => {
          return {
            screenSignIn: fromJS({
              loading: false,
              username: "user",
              password: "PASSWORD"
            })
          };
        }
      },
      fetchToken
    ).done;
    expect(dispatched[0].type).toEqual(TOKEN_RECEIVED);
    done();
  });

  it("Is OK with bad passwords as well", async done => {
    fetchMock.mock({
      matcher: "StageAuthCheck/authenticate",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Username": "user",
        "X-Password": "BADPASS"
      },
      response: {
        status: 401
      }
    });

    const dispatched = [];

    const saga = await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
        getState: () => {
          return {
            screenSignIn: fromJS({
              loading: false,
              username: "user",
              password: "BADPASS"
            })
          };
        }
      },
      fetchToken
    ).done;
    expect(dispatched[0].type).toEqual(AUTHENTICATION_FAILED);
    done();
  });
});
