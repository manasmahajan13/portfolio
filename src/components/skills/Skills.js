import React from "react";
import "./Skills.css";
import { Grid } from "@mui/material";
import { ReactComponent as CssLogo } from "../../assets/svg/css-icon.svg";
import { ReactComponent as HtmlLogo } from "../../assets/svg/html-icon.svg";
import { ReactComponent as JsLogo } from "../../assets/svg/js-logo.svg";
import { ReactComponent as TsxLogo } from "../../assets/svg/tsx-logo.svg";
import { ReactComponent as ReactLogo } from "../../assets/svg/react-logo.svg";
import { ReactComponent as ReduxLogo } from "../../assets/svg/redux-logo.svg";
import { ReactComponent as SwiftLogo } from "../../assets/svg/swift-logo.svg";
import { ReactComponent as SwiftUiLogo } from "../../assets/svg/swiftui-logo.svg";
import { ReactComponent as CppLogo } from "../../assets/svg/c++logo.svg";

import "aos/dist/aos.css";

const skillsArray = [
  { name: "HTML", logo: <HtmlLogo /> },
  { name: "CSS", logo: <CssLogo /> },
  { name: "JavaScript", logo: <JsLogo /> },
  { name: "TypeScript", logo: <TsxLogo /> },
  { name: "React", logo: <ReactLogo /> },
  { name: "Redux", logo: <ReduxLogo /> },
  { name: "Swift", logo: <SwiftLogo /> },
  { name: "SwiftUI", logo: <SwiftUiLogo /> },
  { name: "C++", logo: <CppLogo /> },
];

const Skills = () => {
  return (
    <div className="skillsWrapper" id="skills">
      <div className="skillsWrapperInner">
        <div className="skillsHeader" data-aos="fade-up">
          <div className="skillsTitle">Skills</div>
          <div className="skillsSubtitle">Technologies and experience</div>
        </div>
        <Grid container spacing={2} className="skillsGrid">
          {skillsArray.map((skill) => {
            return (
              <Grid
                item
                xs={4}
                className="skillsGridItem"
                data-aos="fade-up"
                key={skill.name}
              >
                <div className="skillBox">
                  <div className="skillLogo">{skill.logo}</div>
                  <div> {skill.name}</div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
