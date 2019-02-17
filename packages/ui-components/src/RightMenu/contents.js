import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = theme => {
  return {
    subheader: {
      fontSize: "1.4rem",
      color: "#e58425",
      lineHeight: "36px",
      textAlign: "center"
    },
    rightMenuContainer: {
      width: "175px",
      height: "100%",
      backgroundColor: "#292a2f"
    },
    indicator: {
      backgroundColor: "#e58425"
    },
    tabsRoot: {
      height: "32px",
      minHeight: "32px",
      minWidth: "175px"
    },
    tabRoot: {
      height: "32px",
      minHeight: "32px",
      width: "87.5px"
    },
    tabWrapper: {
      fontSize: "1.2rem"
    },
    labelContainer: {
      padding: 0
    }
  };
};

class RightMenuContents extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    // TODO save in store so tab stays the same when switching pages
    this.setState({ value });
  };

  render() {
    const { classes, ThemeEditor } = this.props;

    return (
      <Fragment>
        <div className={classes.rightMenuContainer}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              classes={{
                indicator: classes.indicator,
                root: classes.tabsRoot
              }}
              variant="standard"
            >
              <Tab
                style={{ minWidth: "87.5px" }}
                classes={{
                  wrapper: classes.tabWrapper,
                  root: classes.tabRoot,
                  labelContainer: classes.labelContainer
                }}
                label="Search"
              />
              <Tab
                style={{ minWidth: "87.5px" }}
                classes={{
                  wrapper: classes.tabWrapper,
                  root: classes.tabRoot,
                  labelContainer: classes.labelContainer
                }}
                label="Editor"
              />
            </Tabs>
          </AppBar>
          {this.state.value === 0 && null}
          {this.state.value === 1 && <div>{<ThemeEditor />}</div>}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RightMenuContents);
