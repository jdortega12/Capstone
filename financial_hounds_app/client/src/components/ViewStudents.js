import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/viewstudents';

const ViewStudents = () => {

  /*const fetchData = async() => {
    const emergencyData = await axios.get(API_URL, {responseType: "json"});
    setExpenses(Number(emergencyData.data.total_expenses));
    setSixMonth(Number(emergencyData.data.six_month_amount));
  };*/

  useEffect(() => {
        fetchData();
  }, []);

    return (
      <div className="createBudget">
        <div>
        <h1 className="headerCreateBudget"> View All Students </h1>
        <div className="myBoxViewEmergency">
        </div>
      </div>
    </div>
    );
  }
  
export default ViewStudents;
