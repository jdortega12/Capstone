import React from "react";
import "../styles/StudentHome.css";
import "../styles/Budget.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Budget from "./Budget";
import Emergency from "./Emergency";
import Retirement from "./Retirement";

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
            <p className="paragraphstudentHome">Scroll down to access our options!</p>
            <row>
            <Nav className="me-auto">
               <p className="rowParagraphStudentHome"> Personal Budget Planning! </p>
               <p className="rowParagraphStudentHome"> Emergency Fund Planning! </p>
               <p className="rowParagraphStudentHome"> Retirement Fund Planning! </p>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      <div>
      <Budget />
      </div>
      <div>
      <Emergency />
      </div>
      <div>
      <Retirement />
      </div>
      <div className="myDivViewAll">
      <h1 className="headerBudget">View All Financial Plans</h1>
      <p className="paragraphBudget">
                View all of your financial plans in one place.
      </p>
      <Nav className="me-auto">
          <Link className="myLinkViewAll" to="/ViewAll"> View All Plans </Link>
      </Nav>
      </div>
      </>
    );
  }
  
export default StudentHome;