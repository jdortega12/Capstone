import React from "react";
import "../styles/CreateBudget.css";
import { useState} from 'react';
import axios from 'axios';

const CreateBudget = () => {

    const [inputs, setInputs] = useState({
      income: "",
      fixedExpenses: "",
      variableExpenses: ""
    });
    //const [income, setIncome] = useState("");
    //const [fixedExpenses, setFixedExpenses] = useState("");
    //const [variableExpenses, setVariableExpenses] = useState("");

    
    const updateInputs = (e) => {
      const newInput = e.target.value;
      setInputs({
        ...inputs,
        [e.target.name]: newInput
      });
    };

    const computeBudget = async() => {
      alert('Creating Your Budget!')
      var strippedIncome = inputs.income.replace(/,/g,'');
      const userIncome = Number(strippedIncome);

      var strippedFixedExpenses = inputs.fixedExpenses.replace(/,/g,'');
      const userFixedExpenses = Number(strippedFixedExpenses);

      var strippedVariableExpenses = inputs.variableExpenses.replace(/,/g,'');
      const userVariableExpenses = Number(strippedVariableExpenses);

      const calculatedTakeHomePay = userIncome - ((userIncome * 0.15) + (userIncome * 0.06) + (userIncome * 0.0325) + (userIncome * 0.025));
      const calculatedAnnualTotalExpenses = userFixedExpenses + userVariableExpenses;
      const calculatedAnnualDisposableIncome = calculatedTakeHomePay - calculatedAnnualTotalExpenses;

      //Send budget data to backend
      const budgetData = {"disposable_income": String(Math.round(calculatedAnnualDisposableIncome)), "total_expenses": String(Math.round(calculatedAnnualTotalExpenses))};

      try{
        await axios({
          method: "post",
          url: "/createbudget",
          data: budgetData,
        });
      } catch(error){
        console.log(error)
      }
      
    };
          

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> Student Budget Planner </h1>
          <p className="paragraphCreateBudget">
            The Student Budget Planner will use your gross annual income to determine your take-home pay by deducting 
            Federal tax (%15), State tax (%6), OASDI (%3.25), and Medicare (%2.50).
            You can also input your fixed expenses and variable expenses to see your total expenses and your
            disposible income. This number will be displayed as yearly and monthly. NOTE: Creating a new budget will replace
            any previously created one. 
          </p>
        <div className="myBoxCreateBudget">
            <label className="myLabelCreateBudget">Gross annual income: </label>
            <input
            className="myInputCreateBudget"
            name="income"
            value = {inputs.income}
            onChange = {updateInputs}
            type="text" 
            placeholder="Gross annual income" />

            <label className="myLabelCreateBudget">Fixed expenses: </label>
            <input
            className="myInputCreateBudget"
            name="fixedExpenses"
            value = {inputs.fixedExpenses}
            onChange = {updateInputs}
            type="text" 
            placeholder="Fixed expenses" />

            <label className="myLabelCreateBudget">Variable expenses: </label>
            <input
            className="myInputCreateBudget"
            name="variableExpenses"
            value = {inputs.variableExpenses}
            onChange = {updateInputs}
            type="text" 
            placeholder="Variable expenses" />
        </div>
        <div className="myButtonBox">
        <button onClick={()=> computeBudget()}  className="myButtonCreateBudget">
            Compute Budget
        </button>
        </div>
      </div>
      </div>
    );
  }
  
export default CreateBudget;