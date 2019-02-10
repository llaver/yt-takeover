import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    container: {
      height: "100px"
    }
  };
};

const Item = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography>Item</Typography>
    </div>
  );
};

export default withStyles(styles)(Item);
