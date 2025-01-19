import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <div className="flex flex-col">
      <label>
        Score: <b>{player.score}</b>{" "}
        <button className="bg-red-400" onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          className="border-2"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          className="border-2"
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </div>
  );
}
