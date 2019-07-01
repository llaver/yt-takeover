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
      "https://i.ytimg.com/vi/pl8cagt9gK0",
  title: "Pewdiepie vs. T-Series",
  creator: "DJ Khaled",
  creatorId: "DjKhaled",
  views: 17109067,
  likes: 69695,
  dislikes: 1075,
  length: "String/Object",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
              <VideoDescription description={dummyVideoData.description} />
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
