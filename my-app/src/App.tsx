import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

import ResponsiveAppBar from "./components/navbar";

function App() {
  return (
    <Grid container className="App">
      <ResponsiveAppBar />
      <Outlet />
    </Grid>
  );
}

export default App;
