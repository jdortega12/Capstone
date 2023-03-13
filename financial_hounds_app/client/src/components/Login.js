import React from "react";
import { useState } from 'react';
import "../styles/Login.css";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div className="myDiv">
        <form className="myForm" method="POST" action="http://localhost:3001/login">
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
        </form>
      </div>
    );
  }
  
export default Login;