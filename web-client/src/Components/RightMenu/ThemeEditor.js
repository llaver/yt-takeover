import { connect } from "react-redux";

import Core from "core";
import UIComponents from "ui-components";

const ThemeEditor = UIComponents.ThemeEditor;
const actions = Core.themeEditor.actions;
const selectors = Core.themeEditor.selectors;

const mapStateToProps = state => {
  return {
    getAccentColor: selectors.getAccentColor(state),
    getBackgroundColor: selectors.getMainBackgroundColor(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onColorPick: color =>
      dispatch({
        type: actions.SET_ACCENT_COLOR,
        color: color
      }),
    onBackgroundPick: color => {
      const secondary = color === "#17181c" ? "#292a2f" : "#FFFFFF";
      dispatch({
        type: actions.SET_MAIN_BACKGROUND_COLOR,
        color: color
      });
      dispatch({
        type: actions.SET_SECONDARY_BACKGROUND_COLOR,
        color: secondary
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeEditor);
