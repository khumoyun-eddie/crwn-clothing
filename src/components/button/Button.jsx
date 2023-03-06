import React from "react";
import { BaseButton, GoogleSignButton, InvertedButton } from "./Button.styles";

const BUTTON_TYPE_CLASSES = {
  google: "google",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
// const button = {
//   base: BaseButton,
//   google: GoogleSignButton,
//   inverted: InvertedButton,
// };
// return button[buttonType];

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (<CustomButton {...otherProps}>{children}</CustomButton>);
};

export default Button;
