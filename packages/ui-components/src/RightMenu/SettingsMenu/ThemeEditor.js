import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Swatch from "../../Common/Swatch";

const styles = theme => {
  return {
    container: {},
    title: {
      margin: "6px",
      fontSize: "1.7rem",
      letterSpacing: "0.2rem",
      color: "#e58425",
      textAlign: "center"
    },
    subtitle: {
      lineHeight: "24px",
      fontSize: "1.2rem",
      letterSpacing: "0.2rem",
      color: "#e58425",
      textAlign: "center"
    },
    swatchContainer: {
      display: "flex",
      justifyContent: "center"
    }
  };
};

class ThemeEditor extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.container}>
          <ListSubheader className={classes.title}>SETTINGS</ListSubheader>
          <div>
            <ListSubheader className={classes.subtitle}>COLOR</ListSubheader>
            <div className={classes.swatchContainer}>
              <Swatch />
              <Swatch />
              <Swatch />
              <Swatch />
              <Swatch />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ThemeEditor);
