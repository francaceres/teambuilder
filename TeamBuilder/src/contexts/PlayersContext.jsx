import { createContext, useState } from "react";

const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
    console.log(players);
  };

  return (
    <PlayersContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersProvider };
