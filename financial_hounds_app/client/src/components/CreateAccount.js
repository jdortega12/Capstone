import React from 'react';
import "../styles/CreateAccount.css";
import { useState } from 'react';


const CreateAccount = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [classYear, setClassYear] = useState("");
    const [level, setLevel] = useState("");

    //Make into 
    /*
    const handleSubmit = (event) => {
        event.preventDefault();
        const student = [name, username, password, classYear, level];
        var studentJson = JSON.stringify(student);

        alert(`You entered: ${name}, ${username}, ${password}, ${classYear}, ${level}`)
      }*/


    return (
    <div className="myDiv">
      <form className="myForm" method='post' action='/create_account'>
        <h3 className="myLabel">Create Account</h3>
        <div className="mb-3">
          <label className="myLabel">Full name</label>
          <input
            type="text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label className="myLabel">Username</label>
          <input
          type="text" 
          value = {username}
          onChange = {(e) => setUsername(e.target.value)}
          className="form-control" 
          placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label className="myLabel">Password</label>
          <input
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="myButton">
            Sign Up
          </button>
        </div>
      </form>
    </div>
    );
}

export default CreateAccount;