import { useState } from "react";
import Builder from "../Builder";

const Home = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [displayBuilder, setDisplayBuilder] = useState(false);

  return (
    <div>
      <label htmlFor="nOfPlayersInput">Cantidad de jugadores:</label>
      <input
        id="nOfPlayersInput"
        type="number"
        min="1"
        max="22"
        value={numberOfPlayers}
        onChange={(e) => setNumberOfPlayers(e.target.value)}
      />
      <button onClick={() => setDisplayBuilder(true)}>Siguiente</button>
      {displayBuilder && <Builder numberOfPlayers={numberOfPlayers} />}
    </div>
  );
};

export default Home;
