import React from "react";
import "./About.css";
import ProfileImage from "../../assets/images/profile-image.png";
const About = () => {
  return (
    <div className="aboutWrapper" id="about">
      <div className="aboutWrapperInner">
        <div className="aboutHeader">
          <div className="aboutTitle">About me</div>
          <div className="aboutSubtitle">
            I develop beautiful apps and websites, and I love what I do.
          </div>
        </div>
        <div className="aboutContent">
          <div className="profileImageWrapper">
            <img
              src={ProfileImage}
              alt="Manas Mahajan"
              className="aboutProfileImage"
            />
          </div>
          <div className="profileText">
            I love the world of computers and spend my free time immersed in the
            whole ecosystem of computers and technology. I am an inquisitive
            person with a thirst for knowledge and always ready to adapt and
            learn new things.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
