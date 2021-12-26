import React, { useState, useEffect } from "react";
import Header from "./Header.component";
import Footer from "./Footer.component";
import "./Main.style.css";
import { cars } from "../Api/cars";
const Main = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");


  useEffect(() => {
  setImgSrc(cars[count].img);
  setTitle(cars[count].company);
  }, [count])
  const onClick1 = () => {
    setCount(count + 1);
    setImgSrc(cars[count +count2].img);
    setTitle(cars[count +count2].company);
    console.log(count2+count);
  }

  const onClick2 = () => {
    setCount2(count2 + 1);
    setImgSrc(cars[count2+ count].img);
    setTitle(cars[count2 +count].company);
    console.log(count2+count);
  };

  return (
    <div className="Main">
      <Header count={count} count2={count2} />

      <img className="img" src={imgSrc} alt="img" />
      <h3>{title}</h3>
      <Footer onClickFunc={() => onClick1()} onClickFunc2={() => onClick2()} />
    </div>
  );
};

export default Main;
