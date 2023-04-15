import React from "react";
import "../styles/CreateBudget.css";
import { useState } from 'react';
import axios from 'axios';

const CreateBudget = () => {

    const [income, setIncome] = useState("");
    const [fixedExpenses, setFixedExpenses] = useState("");
    const [variableExpenses, setVariableExpenses] = useState("");

    let [calculations, setCalculations] = useState({
      takeHomePay: 0,
      annualTotalExpenses: 0,
      monthlyTotalExpenses: 0,
      annualDisposibleIncome: 0,
      monthlyDisposibleIncome: 0,
    });
  
    const computeBudget = () => {
      var strippedIncome = income.replace(/,/g,'');
      const userIncome = Number(strippedIncome);

      var strippedFixedExpenses = fixedExpenses.replace(/,/g,'');
      const userFixedExpenses = Number(strippedFixedExpenses);

      var strippedVariableExpenses = variableExpenses.replace(/,/g,'');
      const userVariableExpenses = Number(strippedVariableExpenses);

      const calculatedTakeHomePay = userIncome - ((userIncome * 0.15) + (userIncome * 0.06) + (userIncome * 0.0325) + (userIncome * 0.025));
      const calculatedAnnualTotalExpenses = userFixedExpenses + userVariableExpenses;
      const calculatedMonthlyTotalExpenses = calculatedAnnualTotalExpenses/12;
      const calculatedAnnualDisposibleIncome = calculatedTakeHomePay - calculatedAnnualTotalExpenses;
      const calculatedMonthlyDisposibleIncome = calculatedAnnualDisposibleIncome/12;
  
      setCalculations({
        takeHomePay: Math.round(calculatedTakeHomePay),
        annualTotalExpenses: Math.round(calculatedAnnualTotalExpenses),
        monthlyTotalExpenses: Math.round(calculatedMonthlyTotalExpenses),
        annualDisposibleIncome: Math.round(calculatedAnnualDisposibleIncome),
        monthlyDisposibleIncome: Math.round(calculatedMonthlyDisposibleIncome),
      }); 

      handleCreate(calculations);
    };

    const handleCreate = async(e) => {
        const budgetData = {"name": name, "username": username, "password": password};
        alert(JSON.stringify(budgetData));
        
        /*
        try{
          await axios({
            method: "post",
            url: "/createaccount",
            data: studentData,
          });
        } catch(error){
          console.log(error)
        }*/
          
      };

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> Student Budget Planner </h1>
          <p className="paragraphCreateBudget">
            The Student Budget Planner will use your gross annual income to determine your take-home pay by deducting 
            Federal tax (15%), State tax (%6), OASDI (3.25%), and Medicare (2.50%).
            You can also input your fixed expenses and variable expenses to see your total expenses and your
            disposible income. This number will be displayed as yearly and monthly.
          </p>
        <div className="myBoxCreateBudget">
            <label className="myLabelCreateBudget">Gross annual income</label>
            <input
            className="myInputCreateBudget"
            name="income"
            value = {income}
            onChange = {(e) => setIncome(e.target.value)}
            type="text" 
            placeholder="Gross annual income" />

            <label className="myLabelCreateBudget">Fixed expenses</label>
            <input
            className="myInputCreateBudget"
            name="fixedExpenses"
            value = {fixedExpenses}
            onChange = {(e) => setFixedExpenses(e.target.value)}
            type="text" 
            placeholder="Fixed expenses" />

            <label className="myLabelCreateBudget">Variable expenses</label>
            <input
            className="myInputCreateBudget"
            name="variableExpenses"
            value = {variableExpenses}
            onChange = {(e) => setVariableExpenses(e.target.value)}
            type="text" 
            placeholder="Variable expenses" />
        </div>

        <button onClick={()=> computeBudget()}  className="myButtonCreateBudget">
            Compute Budget
        </button>
        <div className="myBoxCreateBudget">
            <h1 className="myPanelCreateBudget">Take-Home Pay: ${calculations.takeHomePay}</h1>
            <h1 className="myPanelCreateBudget">Annual Total Expenses: ${calculations.annualTotalExpenses}</h1>
            <h1 className="myPanelCreateBudget">Monthly Total Expenses: ${calculations.monthlyTotalExpenses}</h1>
            <h1 className="myPanelCreateBudget">Annual Disposible Income: ${calculations.annualDisposibleIncome}</h1>
            <h1 className="myPanelCreateBudget">Monthly Disposible Income: ${calculations.monthlyDisposibleIncome}</h1>
        </div>
      </div>
      </div>
    );
  }
  
export default CreateBudget;