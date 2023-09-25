import React from "react";
import Spinner from "../../assets/img/gif/loading.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={Spinner} className="loading" alt="gif" />
        <p>Loading...</p>
  </div>
  );
}
