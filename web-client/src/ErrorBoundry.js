import React, { Component } from "react";

import { connect } from "react-redux";
import localforage from "localforage";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//import Core from "core";

const styles = theme => {
  return {
    header: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    },
    actions: {
      display: "flex",
      alignItems: "center"
    },
    title: {
      fontSize: "2rem"
    },
    button: {
      margin: "8px"
    }
  };
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch = (error, info) => {
    this.setState({ error: error, errorInfo: info });
  };

  render() {
    if (!this.state.error) return this.props.children;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.content}>
          <Typography className={classes.title}>
            Something Went Wrong
          </Typography>
          <div className={classes.actions}>
            <Button
              onClick={this.props.onAppReset}
              className={classes.button}
              variant="raised"
              color="primary"
            >
              Try Again
            </Button>
            <Button
              href={this.props.feedbackLink}
              className={classes.button}
              variant="raised"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const connectState = state => {
  //const userDetails = Core.userInfo.selectors.getUserDetails(state);

  const buildFeedbackLink = () => {
    const to = "feedback@example.com";
    const subject = "Something Went Wrong";

    const body = [
      "Something went wrong",
      `Current Page: ${window.location}`,
      `Username: `
    ];

    return `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body.join("\n\n"))}`;
  };

  return {
    feedbackLink: buildFeedbackLink()
  };
};

const connectDispatch = dispatch => {
  return {
    onAppReset: () => {
      localforage.clear().then(x => {
        dispatch({ type: "RESET_APP_STATE" });
        window.location.reload(true);
      });
    }
  };
};

const Enhanced = withStyles(styles, { withTheme: true })(ErrorBoundary);
export default connect(
  connectState,
  connectDispatch
)(Enhanced);
