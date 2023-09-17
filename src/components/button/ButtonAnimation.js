import React from "react";
import style from "./ButtonAnimation.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ButtonAnimation = (props) => {
  const { onClick, icon } = props;

  const renderIcon = () => {
    switch (icon) {
      case "arrowUp":
        return <FaArrowUp />;
      case "arrowDown":
      default:
        return <FaArrowDown />;
    }
  };

  return (
    <button onClick={onClick} className={style.animation}>
      {renderIcon()}
    </button>
  );
};

export default ButtonAnimation;
