import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "react-router-redux";
import Pages from "./pages";
const { store, persistor, history } = createStore();

const App = props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Pages />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
