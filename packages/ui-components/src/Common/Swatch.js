import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";

const styles = theme => {
  return {
    container: {
      width: "18px",
      height: "18px",
      margin: "0 4px",
      border: "2px solid transparent"
    },
    swatch: {
      width: "100%",
      height: "100%",
      border: "1px solid black"
    },
    selected: {
      border: "2px solid white"
    }
  };
};

class Swatch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.container}>
          <div
            className={classes.swatch}
            style={{ backgroundColor: "white" }}
          />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Swatch);
