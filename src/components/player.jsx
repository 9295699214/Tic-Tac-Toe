import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name); // State to manage the player's name

  function handleClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // Update the player's name based on input
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span> // Use playerName state
        ) : (
          <input
            type="text"
            value={playerName} // Bind the input value to playerName state
            onChange={handleChange} // Update playerName on change
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
