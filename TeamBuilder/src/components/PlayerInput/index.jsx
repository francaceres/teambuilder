import { useContext, useState } from "react";
import { PlayersContext } from "../../contexts/PlayersContext";

const PlayerInput = ({ index }) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(1);
  const { changeNameValue, changeSkillValue } = useContext(PlayersContext);

  const handleNameChange = (value) => {
    setName(value);
    changeNameValue(index, value);
  };

  const handleSkillChange = (value) => {
    setSkill(value);
    changeSkillValue(index, value);
  };

  return (
    <div className="playerInputDiv">
      <div className="playerInput">
        <label htmlFor="name">Nombre: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </div>
      <div className="playerInput">
        <label htmlFor="skillInput">Habilidad: </label>
        <input
          id="skillInput"
          type="number"
          min="1"
          max="10"
          value={skill}
          onChange={(e) => handleSkillChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PlayerInput;
