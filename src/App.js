import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";
import Logo from "./components/common/Logo";

import Login from "./pages/Login";
import Casino from "./pages/Casino";
import PlayGame from "./pages/PlayGame";

import axios from "axios";

class App extends Component {
  componentDidMount = () => {
    axios.defaults.baseURL = process.env.REACT_APP_CASINO_API_ENDPOINT;
  };

  render() {
    return (
      <Provider store={store}>
        <HashRouter history={history}>
          <Logo src="./images/logo.svg" />

          <div className="main container">
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/casino" component={Casino} />
              <PrivateRoute path="/games/play/:gameId" component={PlayGame} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
