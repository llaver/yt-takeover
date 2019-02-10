import { createSelector } from "reselect";

const screenSelector = state => state.screenSignIn;

export const isLoading = createSelector(screenSelector, state =>
  state.get("loading")
);

export const getUsername = createSelector(screenSelector, state =>
  state.get("username")
);

export const getPassword = createSelector(screenSelector, state =>
  state.get("password")
);

export const getHasError = createSelector(screenSelector, state =>
  state.get("error")
);
