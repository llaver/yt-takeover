import React, { Component } from "react";
import { MuiThemeProvider, jssPreset } from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";

import CssBaseline from "@material-ui/core/CssBaseline";
import makeTheme from "./createMuiTheme";

const theme = makeTheme();

/// https://material-ui-next.com/customization/css-in-js/#other-html-element
const jss = create(jssPreset());
const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) => `YT-Takeover--uicomponents--${rule.key}-${counter++}`;
};
const generateClassName = createGenerateClassName();

class Theme extends Component {
  state = {
    theme: makeTheme()
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ theme: makeTheme() });
  };

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
          {this.props.children}
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default Theme;
