import React from "react";
import style from "./Button.module.css";

// Button function
export default function Button(props) {
  return (
    <div className={style.container}>
      <button className={style.Button} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
