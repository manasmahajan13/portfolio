import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";

const linksArray = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manas-mahajan-a1538a191/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    link: "https://github.com/manasmahajan13",
    icon: GitHubIcon,
  },
  {
    name: "Resume",
    link: "https://github.com/manasmahajan13",
    icon: AssignmentIcon,
  },
];

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeWrapperInner">
        <div className="homeTitle">
          <div className="homeTextRow">
            Hello, I'm <span style={{ color: "var(--accent)" }}>Manas</span>
          </div>
          <div>A Web and iOS developer</div>
        </div>
        <div className="homeSubtitle">
          I'm focused on developing beautiful Web and iOS applications while
          constantly learning & exploring new technologies
        </div>
      </div>
      <div className="linksComponent">
        {linksArray.map((linkObject) => {
          return (
            <div className="linkBoxWrapper">
              <div className="linkBox">
                <linkObject.icon fontSize="large" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
