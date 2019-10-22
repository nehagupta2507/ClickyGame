import React from "react";
import "./style.css";

function Score(props) {
  return (
    <>
      <h1> Fall for Memory Game!
        <img src="./images/icon.png" alt="icon" id="icon"/> 
      </h1>
      
      <h3>Click on an image only once!</h3>
      <p id="message">{props.message}</p>
      <div>
        <span className="score">Score {props.score}</span>
        <span className="score">Top Score {props.topScore}</span>
      </div>
    </>
  )
}

export default Score;
