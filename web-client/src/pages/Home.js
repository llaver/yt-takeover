import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import UIComponents from "ui-components";
import ThemeController from "../Theme";

const Home = UIComponents.Home;

const styles = theme => {
  return {};
};

class HomeController extends Component {
  render() {
    return (
      <ThemeController>
        <Home />
      </ThemeController>
    );
  }
}

const connectState = state => {
  return {};
};

const connectDispatch = dispatch => {
  return {};
};

const Enhanced = withStyles(styles, { withTheme: true })(HomeController);
export default connect(
  connectState,
  connectDispatch
)(Enhanced);
