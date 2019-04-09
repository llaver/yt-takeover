import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {},
  root: {}
};

class Player extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <div />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Player);
