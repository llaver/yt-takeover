import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import PageTwo from "./PageTwo";
import Menus from "./Menus";
import Logout from "./Logout";
//import PrivateRoute from "./PrivateRoute";
import ErrorBoundry from "../ErrorBoundry";

//import Core from "core";
import UIComponents from "ui-components";

const Theme = UIComponents.Theme;

const Pages = props => {
  //const { isAuthenticated } = props;
  const isAuthenticated = false;

  return (
    <Theme>
      <ErrorBoundry>
        <Route
          exact
          path="/"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <Route
          exact
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <Route
          exact
          path="/watch"
          component={PageTwo}
          isAuthenticated={isAuthenticated}
        />
        <Route
          exact
          path="/sign-in"
          component={SignIn}
          isAuthenticated={isAuthenticated}
        />
      </ErrorBoundry>
      <Route exact path="/logout" component={Logout} />
      <Menus />
    </Theme>
  );
};

const mapState = state => {
  return {
    //isAuthenticated: Core.userInfo.selectors.isUserAuthenticated(state),
    //authToken: Core.userInfo.selectors.getUserToken(state)
  };
};

export default withRouter(connect(mapState)(Pages));
