import React from "react";
import "../styles/StudentHome.css";
import { Outlet } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import ViewBudget from "./ViewBudget";
import ViewEmergency from "./ViewEmergency";
import ViewRetirement from "./ViewRetirement";

const ViewAll = () => {
    return (
      <>
      <div className="studentHome">
        <div className="headerDivstudentHome">
          <h1 className="headerstudentHome">Greyhound Financial Planning</h1>
            <p className="paragraphstudentHome">
                From this page you can view all of your financial plans in one place. If you'd like to create a new budget
                navigate back to the Student Home page!
            </p>
            <p className="paragraphstudentHome">Scroll down to view your plans!</p>
            <row>
            <Nav className="me-auto">
               <p className="rowParagraphStudentHome"> View Your Budget! </p>
               <p className="rowParagraphStudentHome"> View Your Emergency Fund! </p>
               <p className="rowParagraphStudentHome"> View Your Retirement Fund! </p>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      <div>
      <ViewBudget />
      </div>
      <div>
      <ViewEmergency />
      </div>
      <div>
      <ViewRetirement />
      </div>
      </>
    );
  }
  
export default ViewAll;