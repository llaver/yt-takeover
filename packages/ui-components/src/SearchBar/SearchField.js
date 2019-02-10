import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";

const styles = {
  container: {
    backgroundColor: "#17181c",
    borderRadius: "3px",
    height: "32px",
    width: "500px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    fontSize: "1.2rem",
    color: "white",
    marginLeft: "10px"
  },
  inputText: {
    letterSpacing: "0.1rem"
  }
};

class SearchField extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Input
          disableUnderline
          placeholder="Search...."
          className={classes.input}
          classes={{ input: classes.inputText }}
          inputProps={{
            "aria-label": "Description"
          }}
        />
      </div>
    );
  }
}

SearchField.propTypes = {};

export default withStyles(styles)(SearchField);
