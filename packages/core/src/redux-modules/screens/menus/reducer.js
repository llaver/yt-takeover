import * as actions from "./actions";

const initial = {
  leftMenuVisible: true,
  rightMenuVisible: false
};

const toggleLeftMenu = (state, action) => {
  return {
    ...state,
    leftMenuVisible: !state.leftMenuVisible
  };
};

const toggleRightMenu = (state, action) => {
  return {
    ...state,
    rightMenuVisible: !state.rightMenuVisible
  };
};

const handlers = {
  [actions.TOGGLE_LEFT_MENU]: toggleLeftMenu,
  [actions.TOGGLE_RIGHT_MENU]: toggleRightMenu
};

export default (state = initial, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
