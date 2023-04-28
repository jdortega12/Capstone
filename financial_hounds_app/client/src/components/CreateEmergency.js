import React from "react";
import "../styles/CreateBudget.css";
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEmergency = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      rent: "",
      utilities: "",
      telecom: "",
      insurance: "",
      transportation: "",
      groceries: ""

    });

    const updateInputs = (e) => {
      const newInput = e.target.value;
      setInputs({
        ...inputs,
        [e.target.name]: newInput
      });
    };

    const computeEmergency = async() => {
      alert('Creating Your Emergency Fund!')
      var strippedRent = inputs.rent.replace(/,/g,'');
      const userRent = Number(strippedRent);

      var strippedUtilities = inputs.utilities.replace(/,/g,'');
      const userUtilities = Number(strippedUtilities);

      var strippedTelecom = inputs.telecom.replace(/,/g,'');
      const userTelecom = Number(strippedTelecom);

      var strippedInsurance = inputs.insurance.replace(/,/g,'');
      const userInsurance = Number(strippedInsurance);

      var strippedTransportation = inputs.transportation.replace(/,/g,'');
      const userTransportation = Number(strippedTransportation);

      var strippedGroceries = inputs.groceries.replace(/,/g,'');
      const userGroceries = Number(strippedGroceries);

      const calculatedMonthlyTotalExpenses = userRent + userUtilities + userTelecom + userInsurance + userTransportation + userGroceries;
      const calculatedSixMonthAmount = calculatedMonthlyTotalExpenses * 6;

      //Send budget data to backend
      const emergencyData = {"total_expenses": String(Math.round(calculatedMonthlyTotalExpenses)), 
        "six_month_amount": String(Math.round(calculatedSixMonthAmount))};

      try{
        await axios({
          method: "post",
          url: "/createemergency",
          data: emergencyData,
        }).then(navigate('/studenthome'));
      } catch(error){
        console.log(error)
      }
      
    };
          

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> Student Emergency Planner </h1>
          <p className="paragraphCreateBudget">
            Your emergency fund should be able to support you for 3 to 6 months worth of expenses.
            In order to determine that amount, enter your monthly expenses. The calculator will extend that amount over a 
            six month period. It will show you the goal amount and how much you should put away in your emergency fund each month.
            One of the most common ways of stashing your emergency fund is using a high-yield savings account.
          </p>
        <div className="myBoxCreateBudget">
            <label className="myLabelCreateBudget">Monthly rent: </label>
            <input
            className="myInputCreateBudget"
            name="rent"
            value = {inputs.rent}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly rent" />

            <label className="myLabelCreateBudget">Monthly utilities: </label>
            <input
            className="myInputCreateBudget"
            name="utilities"
            value = {inputs.utilities}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly utilities" />

            <label className="myLabelCreateBudget">Monthly telecom: </label>
            <input
            className="myInputCreateBudget"
            name="telecom"
            value = {inputs.telecom}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly telecom" />
        </div>

        <div className="myBoxCreateBudget">
            <label className="myLabelCreateBudget">Monthly insurance: </label>
            <input
            className="myInputCreateBudget"
            name="insurance"
            value = {inputs.insurance}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly insurance" />

            <label className="myLabelCreateBudget">Monthly transportation: </label>
            <input
            className="myInputCreateBudget"
            name="transportation"
            value = {inputs.transportation}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly transportation" />

            <label className="myLabelCreateBudget">Monthly groceries: </label>
            <input
            className="myInputCreateBudget"
            name="groceries"
            value = {inputs.groceries}
            onChange = {updateInputs}
            type="text" 
            placeholder="Monthly groceries" />
        </div>
        <div className="myButtonBox">
        <button onClick={()=> computeEmergency()}  className="myButtonCreateBudget">
            Compute Emergency Fund
        </button>
        </div>
      </div>
      </div>
    );
  }
  
export default CreateEmergency;