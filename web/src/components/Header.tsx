import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  Group,
  Key,
  Menu,
  Person,
  Storage,
  VerifiedUser,
} from "@mui/icons-material";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
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
          <ListItemButton onClick={() => navigate("/dash")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider />
          {[
            { name: "Users", icon: Person, link: "/users" },
            { name: "Roles", icon: Group, link: "/roles" },
            { name: "Hosts", icon: Storage, link: "/hosts" },
            { name: "Custom Certificate", icon: Key, link: "/custom" },
            {
              name: "Verify Host Certificate",
              icon: VerifiedUser,
              link: "/verify",
            },
          ].map((item) => (
            <ListItemButton
              key={item.name}
              onClick={() => navigate(item.link)}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
