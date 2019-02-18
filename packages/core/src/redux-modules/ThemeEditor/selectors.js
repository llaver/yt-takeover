import { createSelector } from "reselect";

const themeEditor = state => state.themeEditor;

export const getAccentColor = createSelector(
  themeEditor,
  themeEditor => themeEditor.accentColor
);

export const getMainBackgroundColor = createSelector(
  themeEditor,
  themeEditor => themeEditor.mainBackgroundColor
);

export const getSecondaryBackgroundColor = createSelector(
  themeEditor,
  themeEditor => themeEditor.secondaryBackgroundColor
);
