import React from "react";
import { useAppDispatch } from "../../hooks";
import { clearGrid, resetGrid, tick } from "../../store/grid/actions";

import classes from "./Controls.module.css";

const Controls: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const clearHandler = () => {
    dispatch(clearGrid());
  };
  const seedHandler = () => {
    dispatch(resetGrid());
  };
  const tickHandler = () => {
    dispatch(tick());
  };
  return (
    <div className={classes.controls}>
      <button type="button" onClick={clearHandler}>
        clear
      </button>
      <button type="button" onClick={seedHandler}>
        re-seed
      </button>
      <button type="button" onClick={tickHandler}>
        tick
      </button>
    </div>
  );
};

export default Controls;
