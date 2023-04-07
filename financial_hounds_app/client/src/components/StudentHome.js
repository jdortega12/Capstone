import React from "react";
import "../styles/StudentHome.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const StudentHome = () => {
    return (
      <>
      <div className="studentHome">
        <div className="headerDivstudentHome">
          <h1 className="headerstudentHome">Greyhound Financial Planning</h1>
            <p className="paragraphstudentHome">
                Welcome to Greyhound Financial Planning! From this page you can access budget planning,
                emergency fund planning, and retirement planning.
            </p>
            <row>
            <Nav className="me-auto">
               <Link className="myLinkstudentHome"> Budget Planning </Link>
               <Link className="myLinkstudentHome"> Emergency Fund Planning </Link>
               <Link className="myLinkstudentHome"> Retirement Planning </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default StudentHome;