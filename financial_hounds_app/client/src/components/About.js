import React from "react";
import "../styles/About.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const About = () => {
    return (
      <>
      <div className="about">
        <div>
          <h1 className="headerAbout">About Us</h1>
            <p className="paragraphAbout">
            Greyhound Financial Planning aims to allow Loyola Students to plan out their monthly budget 
            as well as provide other financial services including, other forms of financial planning, and investing services. 
            </p>
            <row className="myRow">
            <Nav className="me-auto">
               <Link className="myLinkAbout" to="./GenericPlanner"> Try Our Generic Budget Planner! </Link>
               <Link className="myLinkAbout"> Sign Up for Retirement Planning! </Link>
               <Link className="myLinkAbout"> Sign Up for Emergency Planning! </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default About;