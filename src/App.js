import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";

import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
