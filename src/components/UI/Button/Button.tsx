import React, { MouseEventHandler } from "react";

import classes from "./Button.module.css";

const Button: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = (props) => {
  return (
    <button type="button" className={`${classes.button}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
