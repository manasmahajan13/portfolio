import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo-dark.png";
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
];
const Header = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{
          backgroundColor: "var(--background)",
          height: "var(--navbar-height)",
        }}
      >
        <div className="navbarLogoWrapper">
          <img src={Logo} alt="Manas Mahajan" className="navbarLogo" />
        </div>
        <div className="navbarItemsWrapper">
          {sectionsArray.map((section) => {
            return (
              <Link
                to={section.link}
                smooth={true}
                offset={-64}
                className="navbarItem"
              >
                {section.text}
              </Link>
            );
          })}

          {/* <span className="navbarItem">Home</span>
          <span className="navbarItem">About</span> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
