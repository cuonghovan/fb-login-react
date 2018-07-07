import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "State/store";
import App from "./views/app";

const store = configureStore();

function render(App) {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById("root")
  );
}

if (module.hot) {
  module.hot.accept("./views/app", () => {
    render(require("./views/app").default);
  });
}

render(App);
