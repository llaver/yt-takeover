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
      letterSpacing: "0.2rem",
      color: theme.palette.custom.mainAccent,
      lineHeight: "36px",
      textAlign: "center",
      padding: 0
    },
    divider: {
      width: "150px",
      margin: "12px auto 0",
      backgroundColor: "#17181c"
    },
    selected: {
      backgroundColor: theme.palette.custom.mainAccent
    },
    list: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 0 0 0",
      height: "100%",
      width: "180px",
      backgroundColor: theme.palette.custom.secondaryBackground
    },
    logout: {
      marginTop: "10px"
    },
    bottom: {
      marginTop: "auto"
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
          onClick={() => props.push("/hub")}
          title="THE HUB"
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
        <Divider className={classes.divider} />
        <ListSubheader className={classes.subheader}>
          SUBSCRIPTIONS
        </ListSubheader>
        <div style={{ height: "250px" }} />
        <Divider className={classes.divider} />
        <div style={{ height: "250px" }} />
        <div className={classes.bottom}>
          <Divider className={classes.divider} />
          <ListLink
            className={classes.logout}
            icon={ICONS.HISTORY}
            onClick={() => props.push("/logout")}
            title="LOGOUT"
          />
        </div>
        {/* TODO Add other links (about, press, jobs, etc.) */}
      </List>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MainMenuContents);
