import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/viewbudget';

const ViewBudget = () => {

  const [disposable_income, setDisposable] = useState("");
  const [total_expenses, setExpenses] = useState("");

  let [calculations, setCalculations] = useState({
    takeHomePay: 0,
    annualTotalExpenses: 0,
    monthlyTotalExpenses: 0,
    annualDisposableIncome: 0,
    monthlyDisposableIncome: 0,
  });

  const fetchData = async() => {
    const budgetData = await axios.get(API_URL, {responseType: "json"});

    let disposable_income = Number(budgetData.data.disposable_income);
    let total_expenses = Number(budgetData.data.total_expenses);

    const calculatedTakeHomePay = Math.round(disposable_income+total_expenses);
    const calculatedAnnualTotalExpenses = Math.round(total_expenses);
    const calculatedMonthlyTotalExpenses = Math.round(total_expenses/12);
    const calculatedAnnualDisposableIncome = Math.round(disposable_income);
    const calculatedMonthlyDisposableIncome = Math.round(disposable_income/12);

    setCalculations({
      takeHomePay: calculatedTakeHomePay,
      annualTotalExpenses: calculatedAnnualTotalExpenses,
      monthlyTotalExpenses: calculatedMonthlyTotalExpenses,
      annualDisposableIncome: calculatedAnnualDisposableIncome,
      monthlyDisposableIncome: calculatedMonthlyDisposableIncome,
    });
  };

  useEffect(() => {
      fetchData();
  }, []);

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> View Your Budget </h1>
          <p className="paragraphCreateBudget">
            Your budget has been divided into three seperate sections to help you plan your yearly and monthly spending.
            Your take-home pay is further split into expenses and disposable income. Expenses include necessary spending like
            rent, insurance, and groceries. Disposable income includes everything else like saving, entertainment and other 
            discretionary purchases.
          </p>
        <div className="myBoxCreateBudget">
        <div className="myBoxCreateBudget">
            <h1 className="myPanelCreateBudget">Take-Home Pay: ${calculations.takeHomePay}</h1>
        </div>
        <div className="myBoxCreateBudget">
            <h1 className="myPanelCreateBudget">Annual Total Expenses: ${calculations.annualTotalExpenses}</h1>
            <h1 className="myPanelCreateBudget">Monthly Total Expenses: ${calculations.monthlyTotalExpenses}</h1>
        </div>
        <div className="myBoxCreateBudget">
            <h1 className="myPanelCreateBudget">Annual Disposable Income: ${calculations.annualDisposableIncome}</h1>
            <h1 className="myPanelCreateBudget">Monthly Disposable Income: ${calculations.monthlyDisposableIncome}</h1>
        </div>
      </div>
      </div>
    </div>
    );
  };
  
export default ViewBudget;
