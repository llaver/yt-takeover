import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    height: '100%'
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleText: {
    color: 'grey',
    letterSpacing: '.3rem'
  },
  body: {
  
  },
  bodyText: {
    letterSpacing: '.1rem',
    whiteSpace: 'pre-line'
  },
  continue: {
    display: 'flex',
    justifyContent: 'center'
  },
  continueText: {
    color: 'grey',
    letterSpacing: '.3rem'
  },
};

class VideoDescription extends Component {
  render() {
    const { classes, description } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <div className={classes.title}>
            <Typography className={classes.titleText} variant="h5">
              Description
            </Typography>
          </div>
          <div className={classes.body}>
            <Typography className={classes.bodyText} variant="h6">
              {description}
            </Typography>
          </div>
          <div className={classes.continue}>
            <Typography className={classes.continueText} variant="h5">
              Continue ▼
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

VideoDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoDescription);
