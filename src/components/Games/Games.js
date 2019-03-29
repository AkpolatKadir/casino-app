import React from "react";

import GameItem from "./GameItem";

import PropTypes from "prop-types";

function Games({ games }) {
  return (
    <React.Fragment>
      <h3 className="ui dividing header">Games</h3>

      <div className="ui relaxed divided game items links">
        {games.map((game, index) => (
          <div className="game item" key={index}>
            <GameItem game={game} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

Games.propTypes = {
  games: PropTypes.array.isRequired
};

export default Games;
