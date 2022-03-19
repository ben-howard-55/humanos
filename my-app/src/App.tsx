import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Humanos</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to={"/dailyoverview"}>Daily Overview</Link>
        <Link to={"/routine"}>Routine</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
