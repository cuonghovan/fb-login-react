import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Weather from "./pages/Weather";
import ClickCount from "./pages/ClickCount";

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/click-count" component={ClickCount} />
      </Switch>
    </main>
  </div>
);

export default App;
