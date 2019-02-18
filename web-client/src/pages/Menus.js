import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Core from "core";
import Components from "ui-components";

import ThemeEditor from "../Components/RightMenu/ThemeEditor";

const { actions, selectors } = Core.screenMenus;
const RightMenu = Components.RightMenu;
const LeftMenu = Components.LeftMenu;
const NavigationBar = Components.NavigationBar;

const MenuController = props => {
  return (
    <Fragment>
      <NavigationBar
        onLeftMenu={props.onLeftMenu}
        onRightMenu={props.onRightMenu}
      />
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
          ThemeEditor={ThemeEditor}
        />
      </div>
    </Fragment>
  );
};

const connectState = state => {
  //const userDetails = userInfoSelectors.getUserDetails(state);

  const buildFeedbackLink = () => {
    const to = "EMAILHERE@EXAMPLE.COM";
    const subject = "$yt-takeover feedback";

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
    onLeftMenu: () => {
      dispatch({ type: actions.TOGGLE_LEFT_MENU });
    },

    onRightMenu: () => {
      dispatch({ type: actions.TOGGLE_RIGHT_MENU });
    },
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
