import React from 'react';
import "../styles/CreateAccount.css";
import { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleCreate = async(e) => {
      const studentData = {"name": name, "username": username, "password": password};
      //alert(JSON.stringify(studentData));
      
      try{
        await axios({
          method: "post",
          url: "/createaccount",
          data: studentData,
        });
      } catch(error){
        console.log(error)
      }
        
    };

    return (
    <div className="myDiv">
      <form className="myForm" method='POST'>
        <h3 className="myLabel">Create Account</h3>
        <div className="mb-3">
          <label className="myLabel">Full name</label>
          <input
            name="name"
            type="text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label className="myLabel">Email</label>
          <input
          name="username"
          type="text" 
          value = {username}
          onChange = {(e) => setUsername(e.target.value)}
          className="form-control" 
          placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="myLabel">Password</label>
          <input
            name="password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button onClick={()=>handleCreate()} className="myButton">
            Submit
          </button>
        </div>
      </form>

    <div>
      <p className="paragraphCreateAccount">
            Disclaimer: Greyhound Financial Services will only use your inputted financial data for budget and financial planning
            calculations.
      </p>
    </div>
    </div>
    );
}

export default CreateAccount;