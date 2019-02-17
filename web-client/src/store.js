import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "redux-persist/lib/storage";
import createHistory from "history/createBrowserHistory";
import Core from "core";
import createSagaMiddleware from "redux-saga";
import { routerReducer, routerMiddleware } from "react-router-redux";

const sagaMiddleware = createSagaMiddleware();

const { screenMenus, screenSignIn, themeEditor, userInfo } = Core;

const appReducer = combineReducers({
  router: routerReducer,
  screenMenus: screenMenus.reducer,
  screenSignIn: screenSignIn.reducer,
  themeEditor: themeEditor.reducer,
  userInfo: userInfo.reducer
});

const rootReducer = (state, action) => {
  if (action.type === Core.userInfo.actions.TOKEN_REVOKED) {
    state = undefined;
  }

  if (action.type === "RESET_APP_STATE") {
    const userInfo = state.userInfo;
    return appReducer({ userInfo }, action);
  }

  return appReducer(state, action);
};

const persistConfig = {
  transforms: [immutableTransform()],
  key: "APPNAME-PERSIST",
  blacklist: [],
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({});
const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

export default () => {
  const inProduction = process.env["REACT_APP_DATA_ENV"] === "production";

  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddlewareWithHistory
  );

  const enhancers = inProduction ? middlewares : composeEnhancers(middlewares);

  const store = createStore(persistedReducer, enhancers);

  let persistor = persistStore(store);
  [screenSignIn].forEach(mod => mod.sagas.map(sagaMiddleware.run));

  return { store, persistor, history };
};
