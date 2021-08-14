import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  Group,
  Menu,
  Person,
  Storage,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const history = useHistory();
  const theme = useTheme();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
            edge="start"
          >
            <Menu />
          </IconButton>
          <Typography variant="h4">SSHCA Management</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{
          paper: "test",
        }}
        onClick={() => setDrawerOpen(false)}
      >
        <div>
          <IconButton onClick={() => setDrawerOpen(false)}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <List>
          <Divider />
          <ListItem button onClick={() => history.push("/dash")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <Divider />
          {[
            { name: "Users", icon: Person, link: "/users" },
            { name: "Roles", icon: Group, link: "/roles" },
            { name: "Hosts", icon: Storage, link: "/hosts" },
          ].map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => history.push(item.link)}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
