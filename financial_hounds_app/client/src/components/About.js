import React from "react";
import "../styles/About.css";

const About = () => {
    return (
      <div className="about">
        <div>
          <h1 className="headerAbout">About Us</h1>
            <p className="paragraphAbout">
            Greyhound Financial Planning aims to allow Loyola Students to plan out their monthly budget 
            as well as provide other financial services including, other forms of financial planning, and investing services. 
            </p>
            <row className="myRow">
               <button className="myButtonAbout"> Try Our Generic Budget Planner! </button>
               <button className="myButtonAbout"> Sign Up for Retirement Planning! </button>
               <button className="myButtonAbout"> Sign Up for Emergency Planning! </button>
            </row>
        </div>
      </div>
    );
  }
  
export default About;