import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Core from "core";
import UIComponents from "ui-components";

const Theme = UIComponents.Theme;

// import HomeIcon from "@material-ui/constants/Home";
// import PageIcon from "@material-ui/constants/Pages";

//const Header = UIComponents.Header;
const Home = UIComponents.Home;
//const Navigation = UIComponents.Navigation;
//const Item = UIComponents.Item;

// const navItems = [
//   { label: "Home", value: "/home", icon: HomeIcon },
//   { label: "Page 2", value: "/page-2", icon: PageIcon }
// ];

const styles = theme => {
  return {
    container: {
      display: "grid",
      gridTemplateRows: "55px auto 58px",
      height: theme.layout.vh(100)
    },
    content: {
      display: "grid",
      gridTemplateColumns: "325px auto"
    },
    scrollable: {
      height: theme.layout.vh(100, { subtract: [55, 58] }),
      overflow: "auto"
    }
  };
};

class HomeController extends Component {
  render() {
    const { onLeftMenu, onRightMenu } = this.props;

    return (
        <Theme>
          <Home onLeftMenu={onLeftMenu} onRightMenu={onRightMenu} />
        </Theme>
    );
  }
}

const connectState = state => {
  return {};
};

const connectDispatch = dispatch => {
  const onLeftMenu = () => {
    console.log("opening left menu");
    dispatch({ type: Core.screenMenus.actions.TOGGLE_LEFT_MENU });
  };

  const onRightMenu = () => {
    dispatch({ type: Core.screenMenus.actions.TOGGLE_RIGHT_MENU });
  };

  return {
    onLeftMenu,
    onRightMenu
  };
};

const Enhanced = withStyles(styles, { withTheme: true })(HomeController);
export default connect(
  connectState,
  connectDispatch
)(Enhanced);
