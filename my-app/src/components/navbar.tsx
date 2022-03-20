import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import BedtimeIcon from "@mui/icons-material/Bedtime";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import routeNavMappings from "../routes/route-mappings";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [state, setState] = React.useState(true);

  const routes = routeNavMappings.routes;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Grid
      item
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((route, index) => (
          <Link to={route.path} key={index}>
            <ListItem button>
              <ListItemIcon>
                <BedtimeIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ textDecoration: "none" }}
                primary={route.name}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Grid>
  );

  return (
    <Grid item xs={12}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            Humanos
          </Typography>
          <Avatar />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Grid>
  );
};

export default ResponsiveAppBar;
