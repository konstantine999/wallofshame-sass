import React from "react";

function HeaderButton(props) {
  return (
    <button className="header-button" onClick={props.addNewUser}>
      Create
    </button>
  );
}

export default HeaderButton;
