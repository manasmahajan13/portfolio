import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const sectionsArray = [
  {
    text: "Home",
    link: "home",
  },
  {
    text: "About",
    link: "about",
  },
  {
    text: "Skills",
    link: "skills",
  },
  {
    text: "Contact",
    link: "contact",
  },
];
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      elevation={0}
      style={{ background: "transparent", backdropFilter: "blur(3px)" }}
    >
      <Toolbar
        sx={{
          height: "var(--navbar-height)",
        }}
      >
        <div className="navbarLogoWrapper">
          Manas <span>Mahajan</span>
        </div>
        <div className="navbarLogoWrapperMobile">
          M<span>M</span>
        </div>
        <div className="sectionsDrawerButton">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="navbarItemsWrapper">
          {sectionsArray.map((section) => {
            return (
              <Link
                to={section.link}
                smooth={true}
                className="navbarItem"
                key={section.link}
              >
                {section.text}
              </Link>
            );
          })}
        </div>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className="sectionsDrawer">
          <div className="sectionsDrawerHeader">
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "var(--accent)" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          {sectionsArray.map((section) => {
            return (
              <Button className="sectionDrawerButton" key={section.link}>
                <Link
                  to={section.link}
                  smooth={true}
                  className="sectionDrawerLink"
                  key={section.link}
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                >
                  {section.text}
                </Link>
              </Button>
            );
          })}
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
