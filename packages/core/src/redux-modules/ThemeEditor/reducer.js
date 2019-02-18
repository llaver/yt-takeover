import * as actions from "./actions";

const initial = {
  accentColor: "#e58425",
  mainBackgroundColor: "#17181c",
  secondaryBackgroundColor: "#292a2f"
};

const setAccentColor = (state, action) => {
  return {
    ...state,
    accentColor: action.color
  };
};

const setMainBackgroundColor = (state, action) => {
  return {
    ...state,
    mainBackgroundColor: action.color
  };
};

const setSecondaryBackgroundColor = (state, action) => {
  return {
    ...state,
    secondaryBackgroundColor: action.color
  };
};

const handlers = {
  [actions.SET_ACCENT_COLOR]: setAccentColor,
  [actions.SET_MAIN_BACKGROUND_COLOR]: setMainBackgroundColor,
  [actions.SET_SECONDARY_BACKGROUND_COLOR]: setSecondaryBackgroundColor
};

export default (state = initial, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
