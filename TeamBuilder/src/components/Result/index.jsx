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

  return (
    <div>
      <div>
        <h2>Team 1</h2>
        {team1.map((player) => (
          <div key={player.name}>{player.name + " " + player.skill}</div>
        ))}
      </div>
      <div>
        <h2>Team 2</h2>
        {team2.map((player) => (
          <div key={player.name}>{player.name + " " + player.skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Result;
