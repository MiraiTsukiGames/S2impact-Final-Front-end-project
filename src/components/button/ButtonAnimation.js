import React from "react";
import style from "./ButtonAnimation.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// Button animation function
const ButtonAnimation = (props) => {
  const { onClick, icon } = props;

  // Switch render icon
  const renderIcon = () => {
    switch (icon) {
      case "arrowUp":
        return <FaArrowUp />;
      case "arrowDown":
      default:
        return <FaArrowDown />;
    }
  };

  // Render button
  return (
    <button onClick={onClick} className={style.animation}>
      {renderIcon()}
    </button>
  );
};

export default ButtonAnimation;
