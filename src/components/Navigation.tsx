import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import ProfileImg from "../assets/images/avatar.png"; // 🔹 temporary image

const drawerWidth = 240;

const navItems: [string, string][] = [
  ["History", "history"],
  ["Education", "education"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

type NavigationProps = {
  parentToChild: {
    mode: "light" | "dark";
  };
  modeChange: () => void;
};

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />
      <List>
        {navItems.map(([label, target]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(target)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        elevation={scrolled ? 4 : 0}
      >
        <Toolbar className="navigation-bar" sx={{ minHeight: 70 }}>

          {/* Mobile menu */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Theme toggle */}
          {mode === "dark" ? (
            <LightModeIcon
              onClick={modeChange}
              sx={{ cursor: "pointer", color: "#fff" }}
            />
          ) : (
            <DarkModeIcon
              onClick={modeChange}
              sx={{ cursor: "pointer", color: "#fff" }}
            />
          )}

          {/* Centered Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              justifyContent: "center",
              gap: 2,
            }}
          >
            {navItems.map(([label, target]) => (
              <Button
                key={label}
                onClick={() => scrollToSection(target)}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: "50%",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                    left: 0,
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Rightmost Profile Image */}
       <Avatar
  src={ProfileImg}
  alt="Profile"
  onClick={scrollToTop}
  imgProps={{
    style: {
      objectPosition: "center top",
    },
  }}
  sx={{
    width: 40,
    height: 40,
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,0.7)",
    ml: 2,
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }}
/>

        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
