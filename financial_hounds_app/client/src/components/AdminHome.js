import React from "react";
import "../styles/Budget.css";
import { Outlet, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const AdminHome = () => {
    return (
      <>
      <div className="budget">
        <div className="headerDivBudget">
          <h1 className="headerBudget">Admin Home</h1>
            <row>
            <Nav className="me-auto">
               <Link className="myLinkAdmin" to="/ViewStudents"> View Students </Link>
               <Link className="myLinkAdmin" to=""> Create Class </Link>
            </Nav>
            </row>
        </div>
      </div>
      <Outlet />
      </>
    );
  }
  
export default AdminHome;