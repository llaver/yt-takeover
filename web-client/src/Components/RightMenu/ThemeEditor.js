import { connect } from "react-redux";

import Core from "core";
import UIComponents from "ui-components";

const ThemeEditor = UIComponents.ThemeEditor;
const actions = Core.themeEditor.actions;
const selectors = Core.themeEditor.selectors;

const mapStateToProps = state => {
  return {
    getAccentColor: selectors.getAccentColor(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onColorPick: color =>
      dispatch({
        type: actions.SET_ACCENT_COLOR,
        color: color
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeEditor);
