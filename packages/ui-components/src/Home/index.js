import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    height: "64px"
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
