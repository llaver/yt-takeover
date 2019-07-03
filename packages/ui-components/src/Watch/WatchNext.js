import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {},
  root: {
    overflowY: 'scroll'
  },
  titleText: {
    paddingLeft: '8px',
    letterSpacing: '.3rem'
  },
};

class VideoInfo extends Component {
  render() {
    const { classes, watchNext } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <Typography className={classes.titleText} variant="h4">
            Watch Next
          </Typography>
          {watchNext.map(i => (
            <VideoCard key={i} />
          ))}
        </div>
      </div>
    );
  }
}

VideoInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoInfo);
