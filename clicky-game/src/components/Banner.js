import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <nav>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">
        Clicky Game
      </li>
      <li class="list-group-item">
        Click an image to begin!
      </li>
      <li class="list-group-item">
        Score: | Top Score:
      </li>
    </ul>
    </nav>
  );
}

export default Banner;
