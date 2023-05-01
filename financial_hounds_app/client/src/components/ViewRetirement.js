import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/viewretirement';

const ViewRetirement = () => {

  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");
  let [difference, setDifference] = useState("");


  const fetchData = async() => {
    const retirementData = await axios.get(API_URL, {responseType: "json"});
    let goal = Number(retirementData.data.retirement_goal);
    let saved = Number(retirementData.data.retirement_saved);
    setGoal(goal);
    setSaved(saved);

    const calculatedDifference = goal - saved;
    setDifference(calculatedDifference);
  };

  useEffect(() => {
      fetchData();
  }, []);

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> View Your Retirement Plan </h1>
          <p className="paragraphCreateBudget">
            You can see you retirement goal as well as the amount you would have saved by age 67.
            The closer the "Need to Save" value is to 0, the closer you are to your retirement goal.
            You can lessen this value by increasing your monthly saving amount. There are other avenues as well
            including other investments and retirement funds such as a Roth IRA.
          </p>
        <div className="myBoxCreateBudget">
        <div className="myBoxCreateBudget">
            <h1 className="myPanelCreateBudget">Retirement Goal: ${goal}</h1>
            <h1 className="myPanelCreateBudget">Retirement Amount Saved: ${saved}</h1>
            <h1 className="myPanelCreateBudget">Amount to Save: ${difference}</h1>
        </div>
      </div>
      </div>
    </div>
    );
  };
  
export default ViewRetirement;
