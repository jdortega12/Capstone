import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/viewemergency';

const ViewEmergency = () => {

  const [total_expenses, setExpenses] = useState("");
  const [six_month_amount, setSixMonth] = useState("");

  const fetchData = async() => {
    const emergencyData = await axios.get(API_URL, {responseType: "json"});
    setExpenses(Number(emergencyData.data.total_expenses));
    setSixMonth(Number(emergencyData.data.six_month_amount));
  };

  useEffect(() => {
        fetchData();
  }, []);

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> View Your Emergency Fund </h1>
          <p className="paragraphCreateBudget">
            Your emergency fund should be able to cover your monthly expenses for up to 6 months without additional income.
            It is important to remember that an emergency fund should be dipped into when needed and replenished as soon as possible.
            Below, you can view your monthly expenses and the total six month savings amount you need to cover those expenses. 
          </p>
        <div className="myBoxViewEmergency">
            <h1 className="myPanelCreateBudget">Monthly Total Expenses: ${total_expenses}</h1>
            <h1 className="myPanelCreateBudget">Six Month Savings Amount: ${six_month_amount}</h1>
        </div>
      </div>
    </div>
    );
  }
  
export default ViewEmergency;
