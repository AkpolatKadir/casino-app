import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="ui one column center aligned page grid">
            <div className="column twelve wide">
              <img src="./images/logo.svg" alt="logo" />
            </div>
          </div>
          <div className="main container">
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
