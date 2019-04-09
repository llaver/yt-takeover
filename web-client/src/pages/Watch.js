import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import UIComponents from "ui-components";
import ThemeController from "../Theme";

const Watch = UIComponents.Watch;

const styles = theme => {
  return {};
};

class WatchController extends Component {
  render() {
    return (
      <ThemeController>
        <Watch push={this.props.push} />
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

const Enhanced = withStyles(styles, { withTheme: true })(WatchController);
export default connect(
  connectState,
  connectDispatch
)(Enhanced);
