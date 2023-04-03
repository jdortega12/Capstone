import React from "react";
import "../styles/GenericPlanner.css";
import { useState } from 'react';

const GenericPlanner = () => {

  const [income, setIncome] = useState("");
  let [budget, setBudget] = useState({
    necesities: 0,
    wants: 0,
    savings: 0,
  });

  const computeBudget = () => {
    var strippedIncome = income.replace(/,/g,'');
    const userIncome = Number(strippedIncome);
    const calculatedNecessities = userIncome * 0.5;
    const calculatedWants = userIncome * 0.3;
    const calculatedSavings = userIncome * 0.2;

    setBudget({
      necesities: calculatedNecessities,
      wants: calculatedWants,
      savings: calculatedSavings,
    }); 
  };

    return (
      <div className="genericPlanner">
        <div>
        <h1 className="headerGenericPlanner"> Generic Planner </h1>
          <p className="paragraphGenericPlanner">
            The Generic Planner will break your monthly after-tax income apart using the '50/30/20' budgeting method.
            The method sets apart 50% of your monthly income for necessities, 30% for wants, and 20% for savings and debt payments.
          </p>
          <row>
            <label className="myLabelGenericPlanner">Income</label>
            <input
              name="income"
              type="text" 
              value = {income}
              onChange = {(e) => setIncome(e.target.value)}
              className="myInputGenericPlanner" 
              placeholder="Enter monthly income" />
            <button onClick={()=> computeBudget()} className="myButtonGenericPlanner">
              Compute Budget
            </button>
          </row>
            <div className="myBoxGenericPlanner">
              <h1 className="myPanelGenericPlanner">Necessities: ${budget.necesities}</h1>
              <h1 className="myPanelGenericPlanner">Wants: ${budget.wants}</h1>
              <h1 className="myPanelGenericPlanner">Savings: ${budget.savings}</h1>
            </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
  
export default GenericPlanner;