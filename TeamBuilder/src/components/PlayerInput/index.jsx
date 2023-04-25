import { useContext, useState } from "react";
import { PlayersContext } from "../../contexts/PlayersContext";

const PlayerInput = () => {
  const [sendButton, setSendButton] = useState(true);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(1);
  const { addPlayer } = useContext(PlayersContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const player = {
      name: name,
      skill: skill,
    };
    addPlayer(player);
    setSendButton(false);
  };

  return (
    <form className="playerInput" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="skillInput">Habilidad: </label>
        <input
          id="skillInput"
          type="number"
          min="1"
          max="10"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
      </div>
      {sendButton ? (
        <input type="submit" value="Enviar" />
      ) : (
        <input type="submit" value="Enviar" disabled />
      )}
    </form>
  );
};

export default PlayerInput;
