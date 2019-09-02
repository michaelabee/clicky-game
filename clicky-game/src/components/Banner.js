import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <nav className="navbar">
      <ul>
        <li id="title">
          <p>Memory Garden</p>
        </li>
        <li>
          <p>Click on a plant to begin.</p>
        </li>
        <li>
          <p id="highScore">High Score: </p>
        </li>
        <li>
          <p id="score">Score: </p>
        </li>
      </ul>
    </nav>
  );
}

export default Banner;
