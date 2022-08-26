import React from "react";

function index(props) {
  return (
    <>
      <input type="range" className="slider" min="0" max="360" {...props} />
      <h1 className="rangeText">{props.value}</h1>
    </>
  );
}

export default index;
