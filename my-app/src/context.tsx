import React, { useState, useEffect, createContext } from "react";
import { initUserCalendar } from "./logic/dayArrays";
import { routine } from "./types/routines_types";
import { humanosDay } from "./logic/dayArrays";

let dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface AppContextInterface {
  addRoutine: (routine: routine) => void;
  removeRoutine: (routine: routine) => void;
  updateRoutine: (routine: routine) => void;
  routines: routine[];
  manageCalendar: () => void;
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

  // manage user calendar
  function manageCalendar() {
    // check if localStorage has item of future_humanos
    const fc = localStorage.getItem("future_calendar");
    const pc = localStorage.getItem("past_calendar");

    if (fc) {
      let future_calendar: humanosDay[] = JSON.parse(fc);
      let today = dayjs();

      const last_day = future_calendar[future_calendar.length - 1];
      const difference = dayjs(last_day, "YYYYMMDD").diff(today, "days");

      // potential bug: user could not log on for more than 1 year and break;
      let days_to_create = 365 - difference;

      for (let i = 1; i <= days_to_create; i++) {
        future_calendar.push({
          date: dayjs(last_day, "YYYYMMDD")
            .date.add(i, "day")
            .format("YYYYMMDD"),
          calendarItems: [],
        });
      }

      const old_days = future_calendar.splice(0, days_to_create);

      // find difference between last day in future array and today
      // shift array forward and place stale days into past-array
    } else {
      // create new calendar and add to local storage
      initUserCalendar();

      // add to local storage
    }
  }

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
      value={{
        routines,
        addRoutine,
        updateRoutine,
        removeRoutine,
        manageCalendar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
