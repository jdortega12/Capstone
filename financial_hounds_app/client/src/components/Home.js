import React from "react";
import "../styles/Home.css";
import NavBar from "./NavBar"


function Home(){
    return (
      <>
      <NavBar/>
      <div className="home">
        <div className="headerContainer">
          <h1 className="header"> Loyola University Maryland </h1>
          <div>
          <p className="paragraph"> Greyhound Financial Planning</p>
          </div>
          <div>
          <button className="button"> Sign In </button>
          </div>
        </div>
      </div>
      </>
    );
  }
  
export default Home;