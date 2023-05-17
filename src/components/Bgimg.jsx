import React from "react";
import "../styles/Bgimg.css";

const Bgimg = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.bgimg} alt="background" />

      <div className="bg-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Bgimg;
