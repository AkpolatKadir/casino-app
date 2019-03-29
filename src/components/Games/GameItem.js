import React from "react";

function GameItem({ game }) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default GameItem;
