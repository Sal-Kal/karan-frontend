import React from "react";
import Person from "../assets/person.jpg";

export default function Header() {
  return (
    <div className="header-body">
      <img src={Person} className="header-logo" alt="logo" />
      <div className="header-name-area">
        <div>Kevin Andrew</div>
      </div>
      <div className="header-button-area">
        <button className="watch-button">WATCH LIVE</button>
      </div>
    </div>
  );
}
