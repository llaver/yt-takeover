import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => {
  return {
    container: {
      width: "18px",
      height: "18px",
      margin: "0 4px",
      border: "2px solid transparent"
    },
    selected: {
      border: `2px solid ${
        theme.palette.custom.mainBackground === "#FFFFFF" ? "black" : "white"
      }`
    },
    swatch: {
      width: "100%",
      height: "100%",
      border: "1px solid black"
    }
  };
};

class Swatch extends Component {
  render() {
    const { classes, color, onClick, selected } = this.props;
    return (
      <Fragment>
        <div
          onClick={() => onClick(color)}
          className={classNames(classes.container, {
            [classes.selected]: selected === color
          })}
        >
          <div className={classes.swatch} style={{ backgroundColor: color }} />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Swatch);
