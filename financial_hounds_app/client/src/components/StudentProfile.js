import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import "../styles/StudentProfile.css";
import axios from 'axios';

const StudentProfile = () => {
  const API_URL = '/userData';

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    level: "",
    classYear: ""
  });

  const fetchData = async() => {
    const response = await axios.get(API_URL);
    setUserData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(API_URL, userData);
    alert("Profile updated successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <div className="myDiv">
      <form className="myForm" onSubmit={handleSubmit}>
        <div className="headerContainer">
          <h2 className="header">Your Profile!</h2>
          <p className="paragraph"> View and edit your profile information.</p>
        </div>
        <div className="inputContainer">
          <label className="inputLabel">
            Email:
            <input
              className="inputField"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label className="inputLabel">
            Username:
            <input
              className="inputField"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </label>
          <label className="inputLabel">
            Class Year:
            <input
              className="inputField"
              type="text"
              name="classYear"
              value={userData.classYear}
              onChange={handleChange}
            />
          </label>
          <label className="inputLabel">
            Level:
            <select className="inputField" name="level" value={userData.level} onChange={handleChange}>
              <option value="beginner">Beginner</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>
        <button className="submitButton" type="submit">Update Profile</button>
      </form>
    </div>
  );
};
  /*
  return (
    <div className="myDiv">
      <form className="myForm" onSubmit={handleSubmit}>
        <div className="headerContainer">
          <h2 className="header">Your Profile! </h2>
          <div>
            <p className="paragraph"> View and edit your profile information.</p>
          </div>
        </div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Class Year:
          <input
            type="text"
            name="classYear"
            value={userData.classYear}
            onChange={handleChange}
          />
        </label>
        <label>
          Level:
          <select name="level" value={userData.level} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};
*/
export default StudentProfile;
