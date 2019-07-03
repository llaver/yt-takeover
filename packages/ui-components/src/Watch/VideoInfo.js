import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => {
  return {
    container: {
      minHeight: "250px"
    },
    title: {
      padding: '8px',
      letterSpacing: '.3rem'
    },
    creator: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '8px',
    },
    creatorName: {
      color: theme.palette.custom.mainAccent,
      letterSpacing: '.3rem'
    },
    followingButton: {},
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    likesInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    views: {
      paddingLeft: '8px',
      letterSpacing: '.3rem'
    },
    likes: {
      padding: '8px',
      letterSpacing: '.3rem'
    },
    favorites: {
      padding: '8px',
      letterSpacing: '.3rem'
    }
  };
};

class WatchNext extends Component {
  
  toCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  render() {
    const { classes, title, creator, views, likes, favorites, following } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h4">{title}</Typography>
        </div>
        <div className={classes.creator}>
          <Typography variant="h5" className={classes.creatorName}>{creator}</Typography>
          <div className={classes.followingButton}>
            <Button>{following ? 'Following' : 'Follow'}</Button>
          </div>
        </div>
        <div className={classes.info}>
          <Typography variant="h5" className={classes.views}>{this.toCommas(views)} VIEWS</Typography>
          <div className={classes.likesInfo}>
            <Typography variant="h5" className={classes.likes}>❤️ {this.toCommas(likes)}</Typography>
            <Typography variant="h5" className={classes.favorites}>💔 {this.toCommas(favorites)}</Typography>
          </div>
        </div>
      </div>
    );
  }
}

WatchNext.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WatchNext);
