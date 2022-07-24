import type { FC } from "react";
import { useState } from "react";

import Link from "next/link";

import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar, DrawerHeader } from "@ui/NavBar/navbar.utils";

import { drawerWidth, menuList } from "./navbar.constants";

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = (mode: boolean) => () => setOpen(mode);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Spotify Clone
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {menuList.map(({ Icon, title, href }) => (
            <Link href={href} key={title}>
              <ListItem onClick={handleDrawerToggle(false)} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
