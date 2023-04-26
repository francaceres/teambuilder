import { useContext, useState } from "react";
import Builder from "../Builder";
import { PlayersContext } from "../../contexts/PlayersContext";

const Home = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [displayBuilder, setDisplayBuilder] = useState(false);
  const { setPlayers } = useContext(PlayersContext);

  const createArray = () => {
    let newArrayOfPlayers = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      const emptyPlayer = {
        number: i,
        name: undefined,
        skill: 1,
      };
      newArrayOfPlayers.push(emptyPlayer);
    }
    setPlayers(newArrayOfPlayers);
    setDisplayBuilder(true);
  };

  return (
    <div className="bodyDiv">
      <div className="nOfPlayersDiv">
        <label htmlFor="nOfPlayersInput">Cantidad de jugadores:</label>
        <input
          id="nOfPlayersInput"
          type="number"
          min="1"
          max="22"
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(e.target.value)}
        />
        <button onClick={createArray}>Siguiente</button>
      </div>
      {displayBuilder && <Builder />}
    </div>
  );
};

export default Home;
