import React from "react";
import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  undefined: "",
};

const Button = ({ children, buttonType,...otherProps }) => {
  return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`.trim()} {...otherProps}>{children}</button>;
};

export default Button;
