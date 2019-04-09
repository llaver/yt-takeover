import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Contents from "./contents";

const styles = theme => {
  return {
    drawer: {
      height: "calc(100% - 64px)",
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

const LeftMenu = props => {
  return (
    <Fragment>
      <Drawer
        variant="persistent"
        open={props.open}
        onClose={props.onClose}
        className={classNames(props.classes.drawer, {
          [props.classes.hidden]: !props.open
        })}
        classes={{ paper: props.classes.paper }}
        PaperProps={{
          style: { position: "relative", overflowX: "hidden" }
        }}
      >
        <Contents
          push={props.push}
          onSignOut={props.onSignOut}
          feedbackLink={props.feedbackLink}
        />
      </Drawer>
    </Fragment>
  );
};

LeftMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignOut: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(LeftMenu);
