import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Contents from "./contents";

const styles = theme => {
  return {
    drawer: {
      height: "100%",
      backgroundColor: "#17181c"
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
        className={props.classes.drawer}
        classes={{ paper: props.classes.paper }}
        PaperProps={{
          style: { position: "relative", overflowX: "hidden" }
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
