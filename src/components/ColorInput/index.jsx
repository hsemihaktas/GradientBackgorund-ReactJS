import React from "react";

function index(props) {
  return (
    <div>
      <input
        type="color"
        className="input"
        onChange={props.onChange}
        {...props}
      />
    </div>
  );
}

export default index;
