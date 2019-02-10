import React from "react";
import { connect } from "react-redux";
import Core from "core";
import { Redirect } from "react-router-dom";
import UIComponents from "ui-components";

const mapStateSignInForm = state => {
  return {
    isOnline: true, // For Now
    username: Core.screenSignIn.selectors.getUsername(state),
    password: Core.screenSignIn.selectors.getPassword(state),
    loading: Core.screenSignIn.selectors.isLoading(state),
    signedIn: Core.userInfo.selectors.isUserAuthenticated(state),
    error: Core.screenSignIn.selectors.getHasError(state)
  };
};

const mapDispatchSignInForm = (dispatch, state) => {
  return {
    onUsernameChange: value =>
      dispatch({ type: Core.screenSignIn.actions.USERNAME_CHANGED, value }),
    onPasswordChange: value =>
      dispatch({ type: Core.screenSignIn.actions.PASSWORD_CHANGED, value }),
    onLogin: () => dispatch({ type: Core.userInfo.actions.AUTHENTICATE_USER })
  };
};

const SignInForm = connect(mapStateSignInForm, mapDispatchSignInForm)(
  UIComponents.SignIn
);

const SignInPage = props => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return <SignInForm />;
  }
};

const mapStateSignInPage = state => {
  return {
    isAuthenticated: Core.userInfo.selectors.isUserAuthenticated(state)
  };
};

export default connect(mapStateSignInPage)(SignInPage);
