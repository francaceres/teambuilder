import { createContext, useState } from "react";

const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const changeNameValue = (index, value) => {
    players[index].name = value;
  };

  const changeSkillValue = (index, value) => {
    players[index].skill = value;
  };

  return (
    <PlayersContext.Provider
      value={{ players, setPlayers, changeNameValue, changeSkillValue }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersProvider };
