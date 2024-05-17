import { useState, useRef } from 'react';

export default function Player() {

  const [editedPlayerName, setEditedPlayerName] = useState(null);
  const playerName = useRef(null);

  function handleClick() {
    setEditedPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {editedPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName}type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
