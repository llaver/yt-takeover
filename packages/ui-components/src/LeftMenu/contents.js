import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";

import { ICONS } from "../constants";
import ListLink from "./ListLink";

const styles = theme => {
  return {
    badgeRoot: {
      fontSize: "14px"
    },
    subheader: {
      fontSize: "1.2rem",
      color: "#e58425",
      lineHeight: "36px",
      textAlign: "center"
    },
    divider: {
      width: "150px",
      margin: "0 auto",
      backgroundColor: "#17181c"
    },
    selected: {
      backgroundColor: "#e58425"
    },
    list: {
      padding: "10px 0 0 0",
      height: "100%",
      width: "175px",
      backgroundColor: "#292a2f"
    }
  };
};

const MainMenuContents = props => {
  const { classes } = props;

  const selected = true;
  const selectedClass = classNames(classes.listItem, {
    [classes.selected]: selected
  });

  //TODO refactor ListItems to be individual objects in an object array passed as props

  return (
    <Fragment>
      <List className={classes.list}>
        <ListLink
          icon={ICONS.HOME}
          onClick={() => props.push("/home")}
          title="HOME"
        />
        <ListLink
          icon={ICONS.FAVORITE}
          onClick={() => props.push("/favorites")}
          title="FAVORITES"
        />
        <ListLink
          icon={ICONS.PLAYLIST}
          onClick={() => props.push("/playlists")}
          title="PLAYLISTS"
        />
        <ListLink
          icon={ICONS.PROFILE}
          onClick={() => props.push("/profile")}
          title="PROFILE"
        />
        <ListLink
          icon={ICONS.STUDIO}
          onClick={() => props.push("/studio")}
          title="STUDIO"
        />
        <ListLink
          icon={ICONS.SETTINGS}
          onClick={() => props.push("/settings")}
          title="SETTINGS"
        />
        <Divider className={classes.divider} />
        <ListSubheader className={classes.subheader}>
          SUBSCRIPTIONS
        </ListSubheader>
        <div style={{ height: "250px" }} />
        <Divider className={classes.divider} />
        <ListLink
          icon={ICONS.HISTORY}
          onClick={() => props.push("/history")}
          title="HISTORY"
        />
        <ListLink
          icon={ICONS.SETTINGS}
          onClick={() => props.push("/settings")}
          title="SETTINGS"
        />
        <div style={{ height: "250px" }} />
        <Divider className={classes.divider} />
        <ListLink
          icon={ICONS.HISTORY}
          onClick={() => props.push("/logout")}
          title="LOGOUT"
        />
        <Divider className={classes.divider} />
        {/* TODO Add other links (about, press, jobs, etc.) */}
      </List>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MainMenuContents);
