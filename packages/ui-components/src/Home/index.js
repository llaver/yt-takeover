import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NavigationBar from "../NavigationBar"

const styles = {
  root: {
    flexGrow: 1,
    height: "64px"
  }
};

class Home extends Component {
  render() {
    const {classes, onLeftMenu, onRightMenu} = this.props;
    return (
        <div className={classes.root}>
          <NavigationBar onLeftMenu={onLeftMenu} onRightMenu={onRightMenu}/>
        </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onLeftMenu: PropTypes.func.isRequired,
  onRightMenu: PropTypes.func.isRequired
};

export default withStyles(styles)(Home);
