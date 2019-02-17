import * as actions from "./actions";

const initial = {
  primaryThemeColor: true
};

const setPrimaryThemeColor = (state, action) => {
  return {
    ...state,
    primaryThemeColor: action.color
  };
};

const handlers = {
  [actions.SET_THEME_PRIMARY_COLOR]: setPrimaryThemeColor
};

export default (state = initial, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
