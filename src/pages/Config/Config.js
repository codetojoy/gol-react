import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import classes from "./Config.module.css";

const Config = (props) => {
  return (
    <div className={classes.config}>
<h2>Config here</h2>
    </div>
  );
};

export default Config;
