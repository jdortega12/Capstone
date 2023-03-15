import React from "react";
import { useState } from 'react';
import "../styles/Login.css";
import axios from 'axios';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
      const loginData = {"username": username, "password": password};
      alert(JSON.stringify(loginData));

      try{
        await axios({
          method: "post",
          url: "/login",
          data: loginData,
        });
      } catch(error){
        console.log(error)
      }
        
    };

    return (
      <div className="myDiv">
        <form className="myForm" method='POST'>
            <h3 className="myLabelLogin">Login</h3>
            <div className="mb-3">
                <label className="myLabelLogin">Username</label>
                <input
                    type="text"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Username"
                />
        </div>
        <div className="mb-3">
                <label className="myLabelLogin">Password</label>
                <input
                    type="password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Username"
                />
        </div>
        <div className="d-grid">
          <button onClick={()=>handleSubmit()} className="myButton">
            Submit
          </button>
        </div>
        </form>
      </div>
    );
  }
  
export default Login;