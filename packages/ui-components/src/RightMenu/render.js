import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Contents from "./contents";
import classNames from "classnames";

const styles = theme => {
  return {
    drawer: {
      height: "100%",
      backgroundColor: theme.palette.custom.secondaryBackground
    },
    hidden: {
      display: "none"
    },
    paper: {
      height: "100%"
    }
  };
};

const RightMenu = props => {
  return (
    <Fragment>
      <Drawer
        anchor="right"
        variant="persistent"
        open={props.open}
        onClose={props.onClose}
        className={classNames(props.classes.drawer, {
          [props.classes.hidden]: !props.open
        })}
        classes={{ paper: props.classes.paper }}
        PaperProps={{
          style: {
            backgroundColor: "rgba(0,0,0,0)",
            position: "relative",
            overflow: "hidden"
          }
        }}
      >
        <Contents
          push={props.push}
          onSignOut={props.onSignOut}
          feedbackLink={props.feedbackLink}
          ThemeEditor={props.ThemeEditor}
        />
      </Drawer>
    </Fragment>
  );
};

RightMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignOut: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(RightMenu);
