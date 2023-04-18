import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewBudget = () => {
    return (
      <div className="createBudget">
        <div className="myBoxCreateBudget">
        <h1 className="myPanelCreateBudget">Take-Home Pay: $</h1>
            <h1 className="myPanelCreateBudget">Annual Total Expenses: $</h1>
            <h1 className="myPanelCreateBudget">Monthly Total Expenses: $</h1>
            <h1 className="myPanelCreateBudget">Annual Disposable Income: $</h1>
            <h1 className="myPanelCreateBudget">Monthly Disposable Income: $</h1>
        </div>
      </div>
    );
  }
  
export default ViewBudget;

/*
<h1 className="myPanelCreateBudget">Take-Home Pay: ${calculations.takeHomePay}</h1>
<h1 className="myPanelCreateBudget">Annual Total Expenses: ${calculations.annualTotalExpenses}</h1>
<h1 className="myPanelCreateBudget">Monthly Total Expenses: ${calculations.monthlyTotalExpenses}</h1>
<h1 className="myPanelCreateBudget">Annual Disposable Income: ${calculations.annualDisposableIncome}</h1>
<h1 className="myPanelCreateBudget">Monthly Disposable Income: ${calculations.monthlyDisposableIncome}</h1>*/