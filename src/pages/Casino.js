import React, { Component } from "react";

import { connect } from "react-redux";

import { logoutUser } from "../actions/authActions";
import { getGames } from "../actions/gameActions";

import Category from "../components/Games/Category";
import Games from "../components/Games/Games";

import PropTypes from "prop-types";

class Casino extends Component {
  static propTypes = {
    getGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  state = {
    games: [],
    searchFilter: "",
    categoryFilter: 0
  };

  componentDidMount = () => {
    this.props.getGames();
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.searchFilter && !state.categoryFilter)
      return {
        games: props.games
      };
    else {
      return null;
    }
  }

  onLogoutClick = e => {
    e.preventDefault();

    const { auth } = this.props;
    this.props.logoutUser(auth.user.username);
  };

  onSearch = e => {
    this.setState(
      {
        searchFilter: e.target.value
      },
      () => {
        this.setState({
          games: this.getFilteredGames()
        });
      }
    );
  };

  getFilteredGames = () => {
    const { categoryFilter, searchFilter } = this.state;

    let filteredGames = this.props.games;

    if (searchFilter)
      filteredGames = filteredGames.filter(game => {
        const value = game.name
          .toString()
          .trim()
          .toLocaleUpperCase("en-EN");

        if (
          value &&
          value.indexOf(searchFilter.trim().toLocaleUpperCase("en-EN")) !== -1
        ) {
          return true;
        }

        return false;
      });

    if (categoryFilter) {
      filteredGames = filteredGames.filter(game =>
        game.categoryIds.includes(categoryFilter)
      );
    }

    return filteredGames;
  };

  onCategorySelect = selectedCategoryId => {
    const { categoryFilter } = this.state;

    if (categoryFilter !== selectedCategoryId)
      this.setState(
        {
          categoryFilter: selectedCategoryId
        },
        () => {
          this.setState({
            games: this.getFilteredGames()
          });
        }
      );
  };

  render() {
    const { games } = this.state;

    const { auth } = this.props;
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
            <a href="#" onClick={this.onLogoutClick}>
              <div className="logout ui left floated secondary button">
                <i className="left chevron icon" />
                Log Out
              </div>
            </a>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input ">
              <input
                type="text"
                placeholder="Search Game"
                onChange={this.onSearch}
              />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <Games games={games} />
          </div>
          <div className="four wide column">
            <Category onSelect={this.onCategorySelect} />
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
)(Casino);
