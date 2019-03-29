import React from "react";

function Logo({ src }) {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={src} alt="logo" />
      </div>
    </div>
  );
}

export default Logo;
