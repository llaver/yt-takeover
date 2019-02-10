import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Core from "core";
import UIComponents from "ui-components";

import HomeIcon from "@material-ui/icons/Home";
import PageIcon from "@material-ui/icons/Pages";

const Header = UIComponents.Header;
const Navigation = UIComponents.Navigation;
const Item = UIComponents.Item;

const navItems = [
  { label: "Home", value: "/home", icon: HomeIcon },
  { label: "Page 2", value: "/page-2", icon: PageIcon }
];

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

class PageTwo extends Component {
  render() {
    const { classes, onMenuOpen, history, match } = this.props;

    return (
      <div className={classes.container}>
        <Header onMenuOpen={onMenuOpen} />
        <div className={classes.content}>
          <div className={classes.scrollable}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className={classes.scrollable}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <Navigation
          actions={navItems}
          push={history.push}
          value={match.url}
          params={match.params}
        />
      </div>
    );
  }
}

const connectState = state => {
  return {};
};

const connectDispatch = dispatch => {
  const onMenuOpen = () => {
    dispatch({ type: Core.screenMainMenu.actions.TOGGLE_MAIN_MENU });
  };

  return {
    onMenuOpen
  };
};

const Enhanced = withStyles(styles, { withTheme: true })(PageTwo);
export default connect(
  connectState,
  connectDispatch
)(Enhanced);
