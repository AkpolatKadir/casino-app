import React, { Component } from "react";

import { Link } from "react-router-dom";

class PlayGame extends Component {
  componentDidMount = () => {
    const comeon = window.comeon;

    comeon.game.launch(this.props.match.params.gameId);
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui grid centered">
          <div className="three wide column">
            <Link to="/games">
              <div className="ui right floated secondary button inverted">
                <i className="left chevron icon" />
                Back
              </div>
            </Link>
          </div>
          <div className="ten wide column">
            <div id="game-launch" />
          </div>
          <div className="three wide column" />
        </div>
      </React.Fragment>
    );
  }
}

export default PlayGame;
