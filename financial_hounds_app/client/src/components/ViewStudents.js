import React from "react";
import "../styles/CreateBudget.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/viewstudents';

const ViewStudents = () => {

  const [students, setStudents] = useState("");

  const fetchData = async() => {
    var students = {}
    students = await axios.get(API_URL, {responseType: "json"});
    students = students.data;
    setStudents(students);
  };

  useEffect(() => {
        fetchData();
  }, []);

    return (
      <div className="createBudget">
        <div className="headerDivBudget">
        <h1 className="headerBudget"> View All Students </h1>
        <div>
            {students.map((item, key)=>(
                <div className="studentsTable">
                    <p>{key + 1}. </p>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.username}</p>
                    <p>Class Year: {item.class_year}</p>
                    <p>Level: {item.level}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
    );
  }
  
export default ViewStudents;
