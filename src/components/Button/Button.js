import React from "react";
import "./Button.css";

const Button = ({ text, path, type }) => {
  return (
    <>
      <p className={`btn btn-prim ${type}`}>{text}</p>
    </>
  );
};

export default Button;
