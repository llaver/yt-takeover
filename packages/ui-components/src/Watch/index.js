import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import Player from "./Player";
import VideoInfo from "./VideoInfo";
import VideoDescription from "./VideoDescription";
import WatchNext from "./WatchNext";

const dummyVideoData = {
  id: 1,
  linkId: "pl8cagt9gK0",
  thumbnailUrl:
    "https://i.ytimg.com/vi/pl8cagt9gK0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAFpxkWg65trKs2VkyrkyQMYcYoHw",
  title: "Pewdiepie vs. T-Series",
  creator: "DJ Khaled",
  creatorId: "DjKhaled",
  views: 17109067,
  likes: 69695
};

const dummyPlayerData = {
  id: 1,
  linkId: "pl8cagt9gK0",
  thumbnailUrl:
    "https://i.ytimg.com/vi/pl8cagt9gK0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAFpxkWg65trKs2VkyrkyQMYcYoHw",
  title: "Pewdiepie vs. T-Series",
  creator: "DJ Khaled",
  creatorId: "DjKhaled",
  views: 17109067,
  likes: 69695
};

const dummyInfoData = {
  id: 1,
  linkId: "pl8cagt9gK0",
  channelImageUrl:
    "https://i.ytimg.com/vi/pl8cagt9gK0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAFpxkWg65trKs2VkyrkyQMYcYoHw",
  title: "Pewdiepie vs. T-Series",
  creator: "DJ Khaled",
  creatorId: "DjKhaled",
  views: 17109067,
  likes: 69695
};

const dummyWatchData = {
  id: 1,
  linkId: "pl8cagt9gK0",
  thumbnailUrl:
    "https://i.ytimg.com/vi/pl8cagt9gK0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAFpxkWg65trKs2VkyrkyQMYcYoHw",
  title: "Pewdiepie vs. T-Series",
  creator: "DJ Khaled",
  creatorId: "DjKhaled",
  views: 17109067,
  likes: 69695
};

const styles = {
  container: {
    width: "100%",
    height: "calc(100% - 64px)",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center"
  },
  root: {
    width: "calc(100vw - 410px)",
    height: "calc(100% - 24px)",
    padding: "12px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflowY: "auto"
  },
  video: {
    display: "flex",
    flex: 5,
    flexDirection: "column",
    minWidth: "450px"
  },
  watchNext: {
    backgroundColor: "green",
    flex: 2,
    minHeight: "40vh"
  },
  videoPlayer: {
    backgroundColor: "blue",
    height: "100%",
    flex: 5,
    minHeight: "10vh"
  },
  videoInfo: {
    height: "100%",
    flex: 1,
    minHeight: "20vh"
  },
  videoDescription: {
    backgroundColor: "grey",
    height: "100%",
    flex: 2,
    minWidth: "250px"
  }
};

class Watch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <div className={classes.video}>
            <div className={classes.videoPlayer}>
              <Player />
            </div>
            <div className={classes.videoInfo}>
              <VideoInfo />
            </div>
            <div className={classes.videoDescription}>
              <VideoDescription />
            </div>
          </div>
          <div className={classes.watchNext}>
            <WatchNext />
          </div>
        </div>
      </div>
    );
  }
}

Watch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Watch);
