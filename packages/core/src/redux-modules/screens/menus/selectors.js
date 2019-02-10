import { createSelector } from "reselect";

const menus = state => state.screenMenus;

export const leftMenuVisible = createSelector(menus, menus => menus.leftMenuVisible);
export const rightMenuVisible = createSelector(menus, menus => menus.rightMenuVisible);
