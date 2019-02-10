import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Core from "core";
import Components from "ui-components";

const { actions, selectors } = Core.screenMenus;
const RightMenu = Components.RightMenu;
const LeftMenu = Components.LeftMenu;

const MenuController = props => {
  console.log(
    "left open?",
    props.leftMenuOpen,
    "right open?",
    props.rightMenuOpen
  );
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          backgroundColor: "#17181c"
        }}
      >
        <LeftMenu
          open={props.leftMenuOpen}
          onClose={props.toggleLeftMenu}
          push={props.push}
          onSignOut={props.onSignOut}
          feedbackLink={props.feedbackLink}
        />
        <RightMenu
          open={props.rightMenuOpen}
          onClose={props.toggleRightMenu}
          push={props.push}
          onSignOut={props.onSignOut}
          feedbackLink={props.feedbackLink}
        />
      </div>
    </Fragment>
  );
};

const connectState = state => {
  //const userDetails = userInfoSelectors.getUserDetails(state);

  const buildFeedbackLink = () => {
    const to = "EMAILHERE@EXAMPLE.COM";
    const subject = "$APP_NAME Feedback";

    const body = [
      "Thanks for taking the time to give us feedback",
      `Current Page: ${window.location}`,
      `Username: `,
      "[ Let us know what you think ]"
    ];

    return `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body.join("\n\n"))}`;
  };

  return {
    leftMenuOpen: selectors.leftMenuVisible(state),
    rightMenuOpen: selectors.rightMenuVisible(state),
    feedbackLink: buildFeedbackLink()
  };
};

const connectDispatch = dispatch => {
  return {
    toggleLeftMenu: () => {
      dispatch({ type: actions.TOGGLE_LEFT_MENU });
    },
    toggleRightMenu: () => {
      dispatch({ type: actions.TOGGLE_RIGHT_MENU });
    },
    push: path => {
      dispatch(push(path));
    },
    onSignOut: () => {
      dispatch(push("/logout"));
    }
  };
};

export default connect(
  connectState,
  connectDispatch
)(MenuController);
