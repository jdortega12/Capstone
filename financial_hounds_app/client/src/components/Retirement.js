import React from "react";
import "../styles/Budget.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const Retirement = () => {
    return (
      <>
      <div className="budget">
        <div className="headerDivBudget">
          <h1 className="headerBudget">Retirement Fund Financial Planning</h1>
            <p className="paragraphBudget">
                Retirement planning involves your age, pre-tax income, current retirement savings,
                and your monthly savings towards retirement. Using this informatino a goal amount will be calculated
                for your retirement. Furthermore, the amount you will save with your current saving tactics 
                will be calculated as well. 
            </p>
            <row>
            <Nav className="me-auto">
               <Link className="myLinkBudget" to="/CreateRetirement"> Create Retirement Fund </Link>
               <Link className="myLinkBudget" to="/ViewRetirement"> View Retirement Fund </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default Retirement;