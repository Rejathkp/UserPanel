import React from "react";
import Profile from "../Profile/Profile.jsx"; 
import "./Section.css"; 
import UserInfo from "../UserInfo/UserInfo.jsx";
import Education from "../Education/Education.jsx";
import Career from "../Career/Career.jsx";
import Skills from "../Skills/Skills.jsx";
import Resume from "../Resume/Resume.jsx";
import Portfolio from "../Portfolio/Porfolio.jsx";
import Experience from "../Experience/Experience.jsx";
import Preference from "../Preferences/Preferences.jsx";

const Section = () => {
  return (
    <div className="sections-container">
      <Profile />

      <div className="section student-details">
        <UserInfo />
        <div>
          <img src="\src\assets\Group 1539.svg" alt="" style={{ width:'100%', margin: "10px 0px"}}/>
        </div>
        <Education />
        <br />
        <Career />
        <br />
        <Skills />
        <br />
        <Resume />
        <br />
        <Portfolio />
        <br />
        <Experience />
        <br />
        <Preference />
      </div>

      <div className="section basic-information">
        <h2 className="basic-info-heading">Basic Information</h2>
        <ul className="basic-info-list">
          <li>Education</li>
          <li>Career Objective</li>
          <li>Key Skills</li>
          <li>Resume/Portfolio</li>
          <li>Preference</li>
          <li>Work Experience</li>
          <li>Additional Documents</li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
