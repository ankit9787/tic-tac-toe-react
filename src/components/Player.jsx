import React, { useState } from "react";

const Player = (prop) => {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setName] = useState(prop.name);

  const handleClick = () => {
    setEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <li className={prop.isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name"> {playerName}</span>}
        {isEditing && (
          <span>
            <input type="text" value={playerName} onChange={handleChange} />
          </span>
        )}
        <span className="player-symbol">{[prop.symbol]}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
