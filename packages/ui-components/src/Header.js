import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.main,
      padding: "0 8px"
    },
    menuButton: {
      marginRight: "4px"
    },
    title: {
      display: "flex",
      alignItems: "center",
      color: "#ffffff"
    }
  };
};

const Header = props => {
  const { classes, onMenuOpen } = props;

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={onMenuOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit">
          YT Takeover
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
