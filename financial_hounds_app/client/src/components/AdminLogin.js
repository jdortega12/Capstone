import React from "react";
import { useState } from 'react';
import "../styles/Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AdminLogin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {

      const adminData = {"username": username, "password": password};
      alert("Logging you in!");

      try{
        await axios({
          method: "post",
          url: "/adminlogin",
          data: adminData,
        }).then(navigate('/adminhome'));
      } catch(error){
        console.log(error)
      }
    };

    return (
      <div className="myDivLogin">
        <form className="myFormLogin">
            <h3 className="myLabelLogin">Admin Login</h3>
            <div className="mb-3">
                <label className="myLabelLogin">Email</label>
                <input
                    type="text"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                />
        </div>
        <div className="mb-3">
                <label className="myLabelLogin">Password</label>
                <input
                    type="password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                />
        </div>
        <div className="d-grid">
          <button onClick={()=>handleLogin()} className="myButtonLogin">
            Submit
          </button>
        </div>
        </form>
      </div>
    );
  }
  
export default AdminLogin;