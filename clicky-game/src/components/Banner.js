import React from "react";
import "../styles/Banner.css";

function Banner (props){
  return (
    <nav className="navbar">
      <ul>
        <li id="title">
          <p>Memory Garden</p>
        </li>
        <li>
          <p id="currentTitle"> {props.currentStatus} </p>
        </li>
        <li>
          <p id="highScore">High Score: {props.highScore} </p>
        </li>
        <li>
          <p id="score">Score: {props.score}</p>
        </li>
      </ul>
    </nav>
  );

}

export default Banner;
