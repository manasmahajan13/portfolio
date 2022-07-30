import React from "react";
import "./About.css";
import ProfileImage from "../../assets/images/profile-image.png";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="aboutWrapper" id="about">
      <div className="aboutWrapperInner">
        <div className="aboutContent">
          <div className="aboutHeader" data-aos="fade-up">
            <div className="aboutSubtitleUpper">About Me</div>
            <div className="aboutTitle">Who I Am</div>
            <div className="aboutSubtitle">
              <span className="aboutSubtitleAccented">Hi, I'm Manas. </span>
              <span>I develop apps and websites, and I love what I do. </span>
            </div>
          </div>

          <div className="profileText" data-aos="fade-up">
            I’ve been working on web development for a year now, and on iOS
            development for 3 months. I have developed several projects
            utilizing React for web and Swift for iOS development. I love the
            world of computers and spend my free time immersed in the whole
            ecosystem of computers and technology. I am an inquisitive person
            with a thirst for knowledge and always ready to adapt and learn new
            things.
          </div>
        </div>
        <div className="profileImageWrapper">
          <img
            src={ProfileImage}
            alt="Manas Mahajan"
            className="aboutProfileImage"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
