import React from "react";
import { Link } from "react-router-dom";
import { Logotype } from "./logo.style";
import logo from "../../assets/icons/logo.svg";

export function Logo() {
  return (
    <Logotype>
      <Link to={"/"} className="div-logo">
        <img src={logo} />
        <h1>tamo</h1>
        <span className="junto">junto</span>
      </Link>
    </Logotype>
  );
}
