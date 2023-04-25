import { useContext, useState } from "react";
import PlayerInput from "../PlayerInput";
import { PlayersContext } from "../../contexts/PlayersContext";
import Result from "../Result";

const Builder = ({ numberOfPlayers }) => {
  const { players } = useContext(PlayersContext);

  let divArray = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    divArray.push(<PlayerInput key={i} />);
  }

  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div>
      <div>{divArray.map((div) => div)}</div>
      {players.length == numberOfPlayers && (
        <button onClick={() => setDisplayResult(true)}>Siguiente</button>
      )}
      {displayResult && <Result players={players} />}
    </div>
  );
};

export default Builder;
