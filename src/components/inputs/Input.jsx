import React from "react";
import "./input.scss";

function Input(props) {
  return (
    <div className="input-wrapper">
      <input placeholder={props.placeholder} onChange={props.getValue} />
    </div>
  );
}

export default Input;
