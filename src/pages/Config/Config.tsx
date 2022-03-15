import React, { useRef, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setNumRows, setNumCols } from "../../store/config/actions";
import { resetGrid } from "../../store/grid/actions";

import classes from "./Config.module.css";

const Config: React.FC<{}> = (props) => {
  const config = useAppSelector((state) => state.config);
  const rowRef = useRef<HTMLInputElement>(null);
  const colRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const updateGrid = (numRows: number, numCols: number) => {
    dispatch(resetGrid(numRows, numCols));
  };
  const rowClickHandler = () => {
    const numRows: number = +rowRef!.current!.value;
    const numCols: number = +colRef!.current!.value;
    dispatch(setNumRows(numRows));
    updateGrid(numRows, numCols);
  };
  const colClickHandler = () => {
    const numRows: number = +rowRef!.current!.value;
    const numCols: number = +colRef!.current!.value;
    dispatch(setNumCols(numCols));
    dispatch(resetGrid(numRows, numCols));
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const numRows: number = +rowRef!.current!.value;
    const numCols: number = +colRef!.current!.value;
    console.log(`TRACER submit ${numRows} ${numCols}`);
  };

  return (
    <div className={classes.config}>
      <h2>Config</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="num-rows"># rows: </label>
        <input
          ref={rowRef}
          onChange={rowClickHandler}
          value={config.numRows}
          id="num-rows"
          type="number"
          min="2"
          max="20"
        />
        <br />
        <label htmlFor="num-cols"># cols: </label>
        <input
          ref={colRef}
          onChange={colClickHandler}
          value={config.numCols}
          id="num-cols"
          type="number"
          min="2"
          max="20"
        />
      </form>
    </div>
  );
};

export default Config;
