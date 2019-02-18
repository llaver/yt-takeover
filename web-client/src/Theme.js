import React, { Component } from "react";

import { connect } from "react-redux";

import Core from "core";
import UIComponents from "ui-components";

const selectors = Core.themeEditor.selectors;

const Theme = UIComponents.Theme;

class ThemeController extends Component {
  render() {
    const {
      children,
      getAccentColor,
      getMainBackgroundColor,
      getSecondaryBackgroundColor
    } = this.props;

    return (
      <Theme
        accent={getAccentColor}
        mainBackground={getMainBackgroundColor}
        secondaryBackground={getSecondaryBackgroundColor}
      >
        {children}
      </Theme>
    );
  }
}

const connectState = state => {
  return {
    getAccentColor: selectors.getAccentColor(state),
    getMainBackgroundColor: selectors.getMainBackgroundColor(state),
    getSecondaryBackgroundColor: selectors.getSecondaryBackgroundColor(state)
  };
};

const connectDispatch = dispatch => {
  return {};
};

export default connect(
  connectState,
  connectDispatch
)(ThemeController);
