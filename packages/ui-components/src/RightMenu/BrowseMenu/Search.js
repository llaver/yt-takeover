import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import SearchBar from "../../SearchBar";
import VideoCard from "../../Common/VideoCard";

const styles = theme => {
  return {
    container: {
      height: "100%",
      overflowY: "scroll"
    }
  };
};

class Search extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.container}>
          <SearchBar />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);
