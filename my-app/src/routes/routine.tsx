import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import { habits, routine } from "../types/routines_types";

export default function Routine() {
  const { addRoutine, removeRoutine, updateRoutine, routines } =
    useContext(AppContext);

  const [i, setI] = useState(0);

  const addR = () => {
    const h: habits = {
      id: 1,
      history: [],
    };
    const r: routine = {
      id: i,
      title: "r" + i,
      scheduling_function: "func",
      habits: [h],
    };
    setI(i + 1);
    addRoutine(r);
  };

  return (
    <>
      <main>
        <h2>Routines</h2>
        <button onClick={() => addR()}>add routine</button>
        <button onClick={() => removeRoutine(routines[routines.length - 1])}>
          remove last routine
        </button>
        {routines.map((r) => (
          <div key={r.id}>
            <h1>{r.title}</h1>
            <p>{r.id}</p>
          </div>
        ))}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
