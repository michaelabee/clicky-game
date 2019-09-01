import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Clicky Game</h1>
      <p>
        Click on an image to earn points, but don't click an image more than once!
      </p>
    </div>
  );
}

export default Jumbotron;