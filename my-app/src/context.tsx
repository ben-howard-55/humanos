import React, { useState, useEffect, createContext } from "react";
import { routine } from "./types/routines_types";

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface AppContextInterface {
  addRoutine: (routine: routine) => void;
  removeRoutine: (routine: routine) => void;
  updateRoutine: (routine: routine) => void;
  routines: routine[];
}

const AppContextProvider: React.FC = ({ children }) => {
  const [routines, setRoutines] = useState<routine[]>([]);

  // Local Storage: setting & getting data
  useEffect(() => {
    const routineItems = localStorage.getItem("routines");

    if (routineItems) {
      setRoutines(JSON.parse(routineItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  // functions for updating state

  function addRoutine(routine: routine) {
    setRoutines((prevItems) => [...prevItems, routine]);
  }

  function updateRoutine(routine: routine) {
    setRoutines((prevItems) => [...prevItems, routine]);
  }

  function removeRoutine(routine: routine) {
    setRoutines((prevItems) =>
      prevItems.filter((item) => item.id !== routine.id)
    );
  }

  return (
    <AppContext.Provider
      value={{ routines, addRoutine, updateRoutine, removeRoutine }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
