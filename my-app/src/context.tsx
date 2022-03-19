import React, { useState, useEffect, createContext } from "react";
import { BooleanLiteral } from "typescript";

const initialContext: AppContextInterface = {
  addRoutine: (routine: routine) => {
    throw Error("must set init context");
  },
  removeRoutine: (routine: routine) => {
    throw Error("must set init context");
  },
  updateRoutine: (routine: routine) => {
    throw Error("must set init context");
  },
};

const AppContext = createContext<AppContextInterface>(initialContext);

interface habit_history {
  date: number;
  completed: boolean;
}

interface habits {
  id: number;
  history: habit_history[];
}

interface routine {
  id: number;
  title: string;
  scheduling_function: string;
  habits: habits[];
}

interface AppContextInterface {
  addRoutine: (routine: routine) => void;
  removeRoutine: (routine: routine) => void;
  updateRoutine: (routine: routine) => void;
}

function AppContextProvider(
  context: AppContextInterface,
  children: React.ReactChildren
) {
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

  // functions for

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
    <AppContext.Provider value={{ addRoutine, updateRoutine, removeRoutine }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
