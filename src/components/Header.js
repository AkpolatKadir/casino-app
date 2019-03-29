import React from "react";

function Header({ logoSrc }) {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={logoSrc} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
