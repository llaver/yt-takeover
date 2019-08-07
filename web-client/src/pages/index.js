import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import Hub from "./Hub";
import Watch from "./Watch";
import PageTwo from "./PageTwo";
import Menus from "./Menus";
import Logout from "./Logout";
//import PrivateRoute from "./PrivateRoute";
import ErrorBoundry from "../ErrorBoundry";
import ThemeController from "../Theme";

const Pages = props => {
  //const { isAuthenticated } = props;
  const isAuthenticated = false;

  return (
    <ThemeController>
      <ErrorBoundry>
        <Menus>
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
            path="/hub"
            component={Hub}
            isAuthenticated={isAuthenticated}
          />
          <Route
            exact
            path="/watch"
            component={Watch}
            isAuthenticated={isAuthenticated}
          />
          <Route
            exact
            path="/watch/:id"
            component={Watch}
            isAuthenticated={isAuthenticated}
          />
          <Route
            exact
            path="/sign-in"
            component={SignIn}
            isAuthenticated={isAuthenticated}
          />
        </Menus>
      </ErrorBoundry>
      <Route exact path="/logout" component={Logout} />
    </ThemeController>
  );
};

const mapState = state => {
  return {
    //isAuthenticated: Core.userInfo.selectors.isUserAuthenticated(state),
    //authToken: Core.userInfo.selectors.getUserToken(state)
  };
};

export default withRouter(connect(mapState)(Pages));
