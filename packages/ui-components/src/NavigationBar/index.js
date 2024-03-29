import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "../SearchBar";

const styles = theme => {
  return {
    appBar: {
      zIndex: 1300,
      justifyContent: "space-between",
      backgroundColor: theme.palette.custom.secondaryBackground
    },
    container: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: theme.palette.custom.mainAccent
    },
    titleContainer: {
      float: "left",
      display: "flex",
      alignItems: "center"
    },
    searchBarContainer: {
      marginLeft: "auto"
    },
    title: {
      padding: "1rem",
      cursor: "pointer"
    },
    menuButton: {
      marginLeft: "-12px",
      marginRight: "20px"
    },
    rightNav: {
      marginLeft: "auto"
    }
  };
};

class NavigationBar extends Component {
  render() {
    return (
      <AppBar className={this.props.classes.appBar} position="sticky">
        <Toolbar>
          <div className={this.props.classes.container}>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.props.onLeftMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={this.props.classes.title}
              onClick={() => this.props.history.push("/")}
            >
              YT Takeover
            </Typography>
            <div className={this.props.classes.searchBarContainer}>
              <SearchBar />
            </div>
            <div className={this.props.classes.rightNav}>
              <IconButton
                className={this.props.classes.menuButton}
                color="inherit"
                aria-label="RightMenu"
                onClick={this.props.onRightMenu}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

NavigationBar.propTypes = {
  onLeftMenu: PropTypes.func,
  onRightMenu: PropTypes.func
};

export default withRouter(
  withStyles(styles, { withTheme: true })(NavigationBar)
);
