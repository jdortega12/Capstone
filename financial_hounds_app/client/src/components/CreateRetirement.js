import React from "react";
import "../styles/CreateBudget.css";
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateRetirement = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      age: "",
      pre_tax_income: "",
      current_savings: "",
      monthly_savings: ""
    });

    
    const updateInputs = (e) => {
      const newInput = e.target.value;
      setInputs({
        ...inputs,
        [e.target.name]: newInput
      });
    };

    const computeRetirement = async() => {
      alert('Creating Your Retirement Plan!');
      var strippedAge = inputs.age.replace(/,/g,'');
      const userAge = Number(strippedAge);

      var strippedPreTaxIncome = inputs.pre_tax_income.replace(/,/g,'');
      const userPreTaxIncome = Number(strippedPreTaxIncome);

      var strippedCurrentSavings = inputs.current_savings.replace(/,/g,'');
      const userCurrentSavings = Number(strippedCurrentSavings);

      var strippedMonthlySavings = inputs.monthly_savings.replace(/,/g,'');
      const userMonthlySavings = Number(strippedMonthlySavings);
    
      const yearsToRetirement = 67 - userAge;
      //assuming you will live off 70% of your income a year in retirement
      //How much you will need to live for 25 years without income
      var retirementGoal = Math.round((userPreTaxIncome * 0.7) * 25);
      
        //alert(retirementGoal)
      var yearlySavings = userMonthlySavings * 12;
      var retirementSaved = userCurrentSavings;
      //each year, retirement savings is increased by 5% + that year's savings
      for(var i = 0; i < yearsToRetirement; i++){
        retirementSaved += (retirementSaved * 0.05) + yearlySavings;
      };

      retirementSaved = Math.round(retirementSaved);

      //Send budget data to backend
      const retirementData = {"retirement_goal": retirementGoal, "retirement_saved": retirementSaved};
      try{
        await axios({
          method: "post",
          url: "/createretirement",
          data: retirementData,
        }).then(navigate('/studenthome'));
      } catch(error){
        console.log(error)
      }
      
    };
          

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> Student Retirement Planner </h1>
          <p className="paragraphCreateBudget">
            Your retirement fund will be calculated using your age, pre-tax income, current retirement savings and monthly savings.
            Your monthly savings towards retirement should be %10 of your monthly income. The calculator will assume that you plan to retire
            at the age of 67. Using you monthly savings and a %5 return on retirement investments, the calculator will determine the amount of money needed
            to live for 25 years on your retirement fund using %70 of your income per year.
          </p>
        <div className="myBoxCreateRetirement">
            <label className="myLabelCreateRetirement">Age: </label>
            <input
            className="myInputCreateRetirement"
            name="age"
            value = {inputs.age}
            onChange = {updateInputs}
            type="text" 
            placeholder="Age" />

            <label className="myLabelCreateRetirement">Pre-Tax income: </label>
            <input
            className="myInputCreateRetirement"
            name="pre_tax_income"
            value = {inputs.pre_tax_income}
            onChange = {updateInputs}
            type="text" 
            placeholder="Pre-Tax income" />
        </div>
        <div className="myBoxCreateRetirement">
            <label className="myLabelCreateRetirement">Current retirement savings: </label>
            <input
            className="myInputCreateRetirement"
            name="current_savings"
            value = {inputs.current_savings}
            onChange = {updateInputs}
            type="text" 
            placeholder="Current savings" />

            <label className="myLabelCreateRetirement">Monthly retirement savings: </label>
            <input
            className="myInputCreateRetirement"
            name="monthly_savings"
            value = {inputs.monthly_savings}
            onChange = {updateInputs}
            type="text" 
            placeholder="%10 of monthly budget" />
        </div>
        <div className="myButtonBox">
        <button onClick={()=> computeRetirement()}  className="myButtonCreateBudget">
            Compute Retirement Fund
        </button>
        </div>
      </div>
      </div>
    );
  }
  
export default CreateRetirement;