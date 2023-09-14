import React from "react";

// title function
const Title = ({ text }) => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold overflow-hidden">
      {text}
    </h1>
  );
};

export default Title;
