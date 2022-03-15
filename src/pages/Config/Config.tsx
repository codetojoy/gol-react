import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setNumRows, setNumCols } from "../../store/config/actions";
import { resetGrid } from "../../store/grid/actions";

const Config: React.FC<{}> = (props) => {
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const rowClickHandler = () => {
    console.log(`TRACER row click`);
    const numRows = config.numRows + 1;
    dispatch(setNumRows(numRows));
    dispatch(resetGrid(numRows, config.numCols));
  };
  const colClickHandler = () => {
    console.log(`TRACER col click`);
    dispatch(setNumCols(config.numCols + 1));
  };
  return (
    <div>
      <p>TRACER Config</p>
      <p>TRACER # rows: {config.numRows}</p>
      <p>TRACER # cols: {config.numCols}</p>
      <button onClick={rowClickHandler}>bump row value</button>
      <button onClick={colClickHandler}>bump col value</button>
    </div>
  );
};

export default Config;

/*
// import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";

// const isLoggedIn = useSelector(state: RootState => state.user.loggedIn);
import classes from "./Config.module.css";

// https://github.com/pongsatt/redux-ts-demo/blob/master/src/store/index.ts
const Config: React.FC<{}> = (props) => {
  const config = useSelector<IRootState, boolean>((state: DefaultRootState) => {
    return state.config;
  });
  return (
    <div className={classes.config}>
      <h2>Config here</h2>
      <p># rows: {config.numRows}</p>
      <p># columns: {config.numCols}</p>
    </div>
  );
};

export default Config;
*/
