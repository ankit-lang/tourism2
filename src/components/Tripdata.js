import "./Trip.css";
import React from "react";

const Tripdata = (props) => {
  return (
    <div className="card">
      <div className="images">
        <img src={props.image} alt="img" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Tripdata;
