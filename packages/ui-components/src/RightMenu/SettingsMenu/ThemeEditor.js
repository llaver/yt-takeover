import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Swatch from "../../Common/Swatch";

const COLORS = ["#e48527", "#000000", "#FFFFFF", "#c52c2e", "#209f6a"];
const BACKGROUND_COLORS = ["#17181c", "#FFFFFF"];

const styles = theme => {
  return {
    container: {},
    title: {
      margin: "6px",
      fontSize: "1.7rem",
      letterSpacing: "0.2rem",
      color: theme.palette.custom.mainAccent,
      textAlign: "center"
    },
    subtitle: {
      lineHeight: "24px",
      fontSize: "1.2rem",
      letterSpacing: "0.2rem",
      color: theme.palette.custom.mainAccent,
      textAlign: "center"
    },
    swatchContainer: {
      display: "flex",
      justifyContent: "center"
    }
  };
};

class ThemeEditor extends Component {
  onColorPick = color => {
    this.props.onColorPick(color);
  };

  onBackgroundPick = color => {
    this.props.onBackgroundPick(color);
  };

  render() {
    const { classes, getAccentColor, getBackgroundColor } = this.props;
    let selected = getAccentColor;
    let selectedBackground = getBackgroundColor;
    return (
      <Fragment>
        <div className={classes.container}>
          <ListSubheader className={classes.title}>SETTINGS</ListSubheader>
          <div>
            <ListSubheader className={classes.subtitle}>COLOR</ListSubheader>
            <div className={classes.swatchContainer}>
              {COLORS.map(c => (
                <Swatch
                  key={c}
                  color={c}
                  onClick={() => this.onColorPick(c)}
                  selected={selected}
                />
              ))}
            </div>
          </div>
          <div>
            <ListSubheader className={classes.subtitle}>
              BACKGROUND
            </ListSubheader>
            <div className={classes.swatchContainer}>
              {BACKGROUND_COLORS.map(c => (
                <Swatch
                  key={c}
                  color={c}
                  onClick={() => this.onBackgroundPick(c)}
                  selected={selectedBackground}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ThemeEditor);
