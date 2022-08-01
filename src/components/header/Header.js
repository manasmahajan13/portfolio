import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

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
          {/* <img src={Logo} alt="Manas Mahajan" className="navbarLogo" /> */}
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
    </AppBar>
  );
};

export default Header;
