import React from "react";

import "./Footer.style.css";
const Footer = (props) => {
  return (
    <div className="Footer">
      <button onClick={props.onClickFunc}>
        <i className="fas fa-times-circle" ></i>
      </button>
      <button onClick={props.onClickFunc2}>
        <i className="fas fa-check-circle"></i>
      </button>
    </div>
  );
};

export default Footer;
