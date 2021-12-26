import React from "react";
import './Header.style.css'
import yes from '../assets/images/yes.png'
import no from '../assets/images/no.png'

const Header = (props) => {
  return (
    <div className="Header">
      <div className="leftSide">
        <img src={no} alt="img" />
        <h3>{props.count}</h3>
      </div>
      <div className="rightSide">
        <img src={yes} alt="img" />
        <h3>{props.count2}</h3>
      </div>
    </div>
  );
};

export default Header;
