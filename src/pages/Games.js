import React, { Component } from "react";

import { connect } from "react-redux";

import { logoutUser } from "../actions/authActions";
import { getGames } from "../actions/gameActions";

import PropTypes from "prop-types";

class Games extends Component {
  static propTypes = {
    getGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  componentDidMount = () => {
    this.props.getGames();
  };

  onLogoutClick = e => {
    e.preventDefault();

    this.props.logoutUser();
  };

  renderGames = games => {
    return games.map((game, index) => (
      <div className="game item" key={index}>
        <div className="ui small image">
          <img src={game.icon} alt="game-icon" />
        </div>
        <div className="content">
          <div className="header">
            <b className="name">{game.name}</b>
          </div>
          <div className="description">{game.description}</div>
          <div className="extra">
            <div className="play ui right floated secondary button inverted">
              Play
              <i className="right chevron icon" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const { games, auth } = this.props;
    const { player } = auth.user;

    return (
      <div className="casino">
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui list">
              {/* <!-- player item template --> */}
              <div className="player item">
                <img
                  className="ui avatar image"
                  src={player.avatar}
                  alt="avatar"
                />

                <div className="content">
                  <div className="header">
                    <b className="name">{player && player.name}</b>
                  </div>
                  <div className="description event">
                    {player && player.event}
                  </div>
                </div>
              </div>
              {/* <!-- end player item template --> */}
            </div>
            <div className="logout ui left floated secondary button">
              <span>
                <i className="left chevron icon" />
                <a href="#" onClick={this.onLogoutClick}>
                  Log Out
                </a>
              </span>
            </div>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input ">
              <input type="text" placeholder="Search Game" />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>

            <div className="ui relaxed divided game items links">
              {/* <!-- game item template --> */}
              {this.renderGames(games)}
              {/* <!-- end game item template --> */}
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>

            <div className="ui selection animated list category items">
              {/* <!-- category item template --> */}
              <div className="category item">
                <div className="content">
                  <div className="header" />
                </div>
              </div>
              {/* <!-- end category item template --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  games: state.games.data,
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  { getGames, logoutUser }
)(Games);
