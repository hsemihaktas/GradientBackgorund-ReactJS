import React from "react";

function index(props) {
  return (
    <button className="typeButton" {...props}>
      {props.children}
    </button>
  );
}

export default index;
