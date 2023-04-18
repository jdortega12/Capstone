import React from "react";
import "../styles/Budget.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const Budget = () => {
    return (
      <>
      <div className="budget">
        <div className="headerDivBudget">
          <h1 className="headerBudget">Student Budget Financial Planning</h1>
            <p className="paragraphBudget">
                Student budget planning involves various calculations. 
                When creating your budget first input your Gross Annual Income.
            </p>
            <row>
            <Nav className="me-auto">
               <Link className="myLinkBudget" to="/CreateBudget"> Create Budget </Link>
               <Link className="myLinkBudget" to="/ViewBudget"> View Budget </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default Budget;