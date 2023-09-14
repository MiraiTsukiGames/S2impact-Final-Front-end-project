import React from "react";

export default function Button(props) {
  return (
    <button
      className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
