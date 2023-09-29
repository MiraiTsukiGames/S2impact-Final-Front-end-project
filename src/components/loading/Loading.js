import React from "react";
import { Vortex } from "react-loader-spinner";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      {/* Render loading */}
      <Vortex color="#00BFFF" height={100} />
      <p>Loading...</p>
    </div>
  );
}
