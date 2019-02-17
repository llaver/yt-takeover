import { createSelector } from "reselect";

const themeEditor = state => state.themeEditor;

export const getPrimaryThemeColor = createSelector(
  themeEditor,
  themeEditor => themeEditor.primaryThemeColor
);
