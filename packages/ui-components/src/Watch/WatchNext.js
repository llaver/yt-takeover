import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    container: {
      minHeight: "250px"
    },
    title: {},
    creator: {},
    creatorName: {
      color: theme.palette.custom.mainAccent
    },
    followingButton: {},
    info: {},
    likesInfo: {}
  };
};

class WatchNext extends Component {
  render() {
    const { classes, title, creator } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography>{title}</Typography>
        </div>
        <div className={classes.creator}>
          <div className={classes.creatorName}>{creator}</div>
          <div className={classes.followingButton} />
        </div>
        <div className={classes.info}>
          <div className={classes.views} />
          <div className={classes.likesInfo} />
        </div>
      </div>
    );
  }
}

WatchNext.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WatchNext);
