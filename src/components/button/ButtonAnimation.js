import React from "react";
import style from "./ButtonAnimation.module.css";
import { FaArrowDown } from "react-icons/fa";

const ButtonAnimation = (props) => {
  return <button onClick={props.onClick} className={style.animation}><FaArrowDown /></button>;
};

export default ButtonAnimation;
