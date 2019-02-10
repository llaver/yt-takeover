import React, { Component } from "react";
import Icon from "../Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => {
  return {
    listItem: {
      fontSize: "1.1rem",
      height: "25px",
      paddingTop: "15px",
      paddingBottom: "15px",
      backgroundColor: "#292a2f",
      textAlign: "center",
      borderLeft: "2px solid #e58425",
      "&:hover": {
        backgroundColor: "#e58425"
      }
    },
    listTextRoot: {
      padding: 0
    }
  };
};

class ListLink extends Component {
  constructor(props) {
    super(props);
    this.state = { iconColor: "#e58425" };
  }
  render() {
    return (
      <ListItem
        button
        className={this.props.classes.listItem}
        onClick={() => this.props.onClick()}
        onMouseEnter={() => this.setState({ iconColor: "#ffffff" })}
        onMouseLeave={() => this.setState({ iconColor: "#e58425" })}
      >
        <Icon icon={this.props.icon} color={this.state.iconColor} />
        <ListItemText
          classes={{ root: this.props.classes.listTextRoot }}
          primary={this.props.title}
        />
      </ListItem>
    );
  }
}

ListLink.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(ListLink);
