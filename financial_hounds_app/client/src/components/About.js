import React from "react";
import "../styles/About.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function showContent(userLevel) {
  if (userLevel === "beginner") {
    document.getElementById("beginnerContent").style.display = "block";
    document.getElementById("advancedContent").style.display = "none";
    document.getElementById("userLevel").textContent = "You are a beginner.";
  } else {
    document.getElementById("beginnerContent").style.display = "none";
    document.getElementById("advancedContent").style.display = "block";
    document.getElementById("userLevel").textContent = "You are an advanced user.";
  }
}

function getUserLevel() {
  
  return "beginner"; 
}

const About = () => {
  const userLevel = getUserLevel();

  React.useEffect(() => {
    showContent(userLevel);
  }, [userLevel]);

  return (
    <>
      <div className="about">
        <div className="headerDivAbout">
          <h1 className="headerAbout">About Us</h1>
          <p className="paragraphAbout">
            Greyhound Financial Planning aims to allow Loyola Students to plan out their monthly budget
            as well as provide other financial services including, other forms of financial planning, and investing services.
          </p>
          <div>
            <p id="userLevel"></p>
          </div>
          <row className="myRow">
            <Nav className="me-auto">
              <Link className="myLinkAbout" to="./GenericPlanner"> Try Our Generic Budget Planner! </Link>
              <Link className="myLinkAbout" to="../CreateRetirement"> Sign Up for Retirement Planning! </Link>
              <Link className="myLinkAbout" to="../CreateEmergency"> Sign Up for Emergency Planning! </Link>
            </Nav>
          </row>
        </div>
        <div id="beginnerContent" style={{ display: "none" }}>
          {/*beginner content*/}
        </div>
        <div id="advancedContent" style={{ display: "none" }}>
          {/*advanced content*/}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default About;
