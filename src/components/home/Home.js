import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "aos/dist/aos.css";
import { openInNewTab } from "../../helpers";
import { Tooltip } from "@mui/material";

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
    link: "",
    icon: AssignmentIcon,
  },
];

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeWrapperInner">
        <div className="homeTitle">
          <div
            className="homeTextRow"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Hello, I'm <span style={{ color: "var(--accent)" }}>Manas</span>
          </div>
          <div data-aos="fade-left" data-aos-delay="1000">
            A Web and iOS developer
          </div>
        </div>
        <div
          className="homeSubtitle"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          I'm focused on developing beautiful Web and iOS applications while
          constantly learning & exploring new technologies
        </div>
        <div
          className="linksComponentMobile"
          data-aos="fade-in"
          data-aos-delay="3000"
        >
          {linksArray.map((linkObject) => {
            return (
              <div className="linkBoxWrapper" key={linkObject.name}>
                <div
                  className="linkBox"
                  onClick={() => openInNewTab(linkObject.link)}
                >
                  <linkObject.icon fontSize="large" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="linksComponent" data-aos="fade-in" data-aos-delay="2500">
        {linksArray.map((linkObject) => {
          return (
            <div className="linkBoxWrapper" key={linkObject.name}>
              <Tooltip
                title={linkObject.name}
                placement="right-end"
                enterDelay={500}
                leaveDelay={200}
              >
                <div
                  className="linkBox"
                  onClick={() => openInNewTab(linkObject.link)}
                >
                  <linkObject.icon fontSize="large" />
                </div>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
