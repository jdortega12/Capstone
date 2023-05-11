import React, { useState, useEffect } from "react";
import "../styles/Home.css";

function showContent(userLevel) {
  if (userLevel === "admin") {
    document.getElementById("professorTipBox").style.display = "block";
  } else {
    document.getElementById("professorTipBox").style.display = "none";
  }
}

function getUserLevel() {
  return "admin";
}

const Home = () => {
  const [professorTip, setProfessorTip] = useState("");

  const userLevel = getUserLevel();

  useEffect(() => {
    showContent(userLevel);
  }, [userLevel]);

  const handleTipChange = (event) => {
    setProfessorTip(event.target.value);
  };

  return (
    <>
      <div className="home">
        <div className="headerContainerHome">
          <h1 className="headerHome">Loyola University Maryland</h1>
          <div>
            <p className="paragraphHome">Greyhound Financial Planning</p>
          </div>
          <div id= "professorTipBox"className="professorTipBox" style={{ display: "none" }}>
            
            <input
              type="text"
              value={professorTip}
              onChange={handleTipChange}
              placeholder="Enter professor's tip"
            />
           </div>
          
          
        </div>
        <div className="ptbContainer">
              <h3 className ="tod">Professor's Tip of the Day:</h3>
              <p className="thetip">{professorTip}</p>
            </div>
      </div>

    </>
  );
};

export default Home;
