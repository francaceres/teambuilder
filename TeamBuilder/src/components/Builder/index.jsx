import { useContext, useState } from "react";
import PlayerInput from "../PlayerInput";
import { PlayersContext } from "../../contexts/PlayersContext";
import Result from "../Result";

const Builder = () => {
  const { players } = useContext(PlayersContext);

  let inputArray = [];
  players.forEach((element) => {
    inputArray.push(
      <PlayerInput
        key={players.indexOf(element)}
        index={players.indexOf(element)}
      />
    );
  });

  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="builderDiv">
      <>{inputArray.map((div) => div)}</>
      <button onClick={() => setDisplayResult(true)}>Siguiente</button>
      {displayResult && <Result players={players} />}
    </div>
  );
};

export default Builder;
