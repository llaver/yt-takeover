import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Typography } from "@material-ui/core";

const dummyData = {
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

const styles = theme => {
  return {
    container: {
      //width: "18rem",
      margin: "1rem"
    },
    selected: {
      border: "2px solid white"
    },
    thumbnail: {
      width: "100%",
      cursor: "pointer"
    },
    thumbnailImage: {
      width: "100%",
      height: "auto"
    },
    information: {},
    bottomInfo: {
      display: "flex",
      justifyContent: "space-between"
    },
    title: {
      letterSpacing: ".2rem"
    },
    text: {
      letterSpacing: ".2rem"
    },
    creator: {
      cursor: "pointer",
      color: theme.palette.custom.mainAccent,
      letterSpacing: ".2rem"
    },
    link: {
      cursor: "pointer"
    }
  };
};

class Swatch extends Component {
  render() {
    const { classes } = this.props;
    const {
      id,
      creator,
      creatorId,
      likes,
      linkId,
      thumbnailUrl,
      title,
      views
    } = dummyData;

    const handleVideoLink = () => {
      this.props.history.push(`/watch/${linkId}`);
    };

    const handleCreatorLink = () => {
      this.props.history.push(`/creator/${creatorId}`);
    };

    return (
      <Fragment>
        <div className={classes.container}>
          <div className={classes.thumbnail} onClick={() => handleVideoLink()}>
            <img className={classes.thumbnailImage} src={thumbnailUrl} />
          </div>
          <div className={classes.information}>
            <Typography
              className={classes.link}
              classes={{ root: classes.title }}
              variant="subheading"
              color="textPrimary"
              onClick={() => handleVideoLink()}
            >
              {title}
            </Typography>

            <div className={classes.bottomInfo}>
              <Typography
                classes={{ root: classes.text }}
                variant="body1"
                color="textSecondary"
              >
                ♥ {likes.toLocaleString()}
              </Typography>
              <Typography
                className={classes.creator}
                classes={{ root: classes.text }}
                variant="body1"
                color="textSecondary"
                onClick={() => handleCreatorLink()}
              >
                {creator}
              </Typography>
            </div>
            <Typography
              classes={{ root: classes.text }}
              variant="body1"
              color="textSecondary"
            >
              👁 {views.toLocaleString()}
            </Typography>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Swatch));
