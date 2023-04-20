import React from "react";
import "../styles/Budget.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const Emergency = () => {
    return (
      <>
      <div className="budget">
        <div className="headerDivBudget">
          <h1 className="headerBudget">Emergency Fund Financial Planning</h1>
            <p className="paragraphBudget">
                Student budget planning involves various calculations. 
                When creating your budget first input your Gross Annual Income.
            </p>
            <row>
            <Nav className="me-auto">
               <Link className="myLinkBudget" to="/CreateEmergency"> Create Emergency Fund </Link>
               <Link className="myLinkBudget" to="/ViewEmergency"> View Emergency Fund </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default Emergency;