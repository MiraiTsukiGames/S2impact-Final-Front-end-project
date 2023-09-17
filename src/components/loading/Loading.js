import React from "react";
import Spinner from "../../assets/img/gif/loading.gif";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={Spinner} className="loading" alt="loading" />
        <p>Loading...</p>
  </div>
  );
}
