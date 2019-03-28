import React, { Component } from "react";

import { connect } from "react-redux";
import { loginUser, resetErrors } from "../actions/authActions";

import PropTypes from "prop-types";
import classnames from "classnames";

import validateLogin from "../validation/login";

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  state = {
    credentials: {
      username: "",
      password: ""
    },
    validationErrors: {}
  };

  onChange = e => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { credentials } = this.state;

    let validator = validateLogin(credentials);

    if (validator.isValid) {
      this.props.loginUser(credentials);
    } else {
      this.setState({ validationErrors: { ...validator.errors } }, () => {
        this.props.resetErrors();
      });
    }
  };

  render() {
    const { credentials, validationErrors } = this.state;
    const { username, password } = credentials;

    return (
      <div className="login">
        <div className="ui grid centered">
          <form onSubmit={this.onSubmit}>
            <div className="fields">
              <div className="required field">
                <div
                  className={classnames("ui icon input", {
                    error: validationErrors.username
                  })}
                >
                  <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChange}
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="required field">
                <div
                  className={classnames("ui icon input", {
                    error: validationErrors.password
                  })}
                >
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  { loginUser, resetErrors }
)(Login);
