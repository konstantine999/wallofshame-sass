import React from "react";
import Input from "../inputs/Input";
import "./header.scss";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <header>
      <div className="header-left-wrapper">
        <h1>Wall of shame</h1>
        <p>5 Members</p>
      </div>
      <div className="inputs-wrapper">
        <Input placeholder="Name" getValue={props.name} />
        <Input placeholder="Excuse" getValue={props.excuse} />
      </div>
      <HeaderButton addNewUser={props.addNewUser}></HeaderButton>
    </header>
  );
}

export default Header;
