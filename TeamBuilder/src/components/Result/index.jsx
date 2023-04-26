import { useState } from "react";

const Result = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.skill - a.skill);

  let team1 = [];
  let team2 = [];

  sortedPlayers.forEach((player, index) => {
    const team1Avg =
      team1.reduce((sum, player) => sum + player.skill, 0) / team1.length;
    const team2Avg =
      team2.reduce((sum, player) => sum + player.skill, 0) / team2.length;

    if (index % 2 === 0) {
      if (team1Avg < team2Avg) {
        team1.push(player);
      } else {
        team2.push(player);
      }
    } else {
      if (team2Avg < team1Avg) {
        team2.push(player);
      } else {
        team1.push(player);
      }
    }
  });

  const [viewSkills, setViewSkills] = useState(true);

  return (
    <div className="resultDiv">
      <div>
        <label htmlFor="skillsCheckbox">
          Mostrar las habilidades de cada jugador
        </label>
        <input
          type="checkbox"
          id="skillsCheckbox"
          value={viewSkills}
          onChange={(e) => setViewSkills(!viewSkills)}
        />
      </div>
      <div className="resultDiv__Teams">
        <div>
          <h2>Equipo 1</h2>
          {viewSkills
            ? team1.map((player) => (
                <div key={player.name}>{player.name + " " + player.skill}</div>
              ))
            : team1.map((player) => <div key={player.name}>{player.name}</div>)}
        </div>
        <div>
          <h2>Equipo 2</h2>
          {viewSkills
            ? team2.map((player) => (
                <div key={player.name}>{player.name + " " + player.skill}</div>
              ))
            : team2.map((player) => <div key={player.name}>{player.name}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Result;
