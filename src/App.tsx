import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader/MainHeader";

import Game from "./pages/Game";
import Config from "./pages/Config/Config";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/game" />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/config" exact>
          <Config />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
