import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";
import Header from "./components/Header";

import Login from "./pages/Login";
import Casino from "./pages/Casino";
import PlayGame from "./pages/PlayGame";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header logoSrc="./images/logo.svg" />

          <div className="main container">
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/casino" component={Casino} />
              <PrivateRoute path="/games/play/:gameId" component={PlayGame} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
