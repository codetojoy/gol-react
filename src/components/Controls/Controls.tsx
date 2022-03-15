import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { clearGrid, resetGrid, tick } from "../../store/grid/actions";
import { slowTickAsync } from "../../store/grid/async-actions";
import { IGridState } from "../../store/grid/types";

import classes from "./Controls.module.css";

const Controls: React.FC<{}> = (props) => {
  const grid: IGridState = useAppSelector((state) => state.grid);
  const loading: boolean = grid.loading;
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
  const slowTickHandler = async () => {
    slowTickAsync(dispatch);
  };

  /*
  const loadingText = "working...";
  const clearText = loading ? loadingText : "clear";
  const reSeedText = loading ? loadingText : "re-seed";
  const tickText = loading ? loadingText : "tick";
  const slowTickText = loading ? loadingText : "slow tick";
  */

  const content = loading ? (
    <div className={classes.controls}>
      <p>working...</p>
    </div>
  ) : (
    <div className={classes.controls}>
      <button type="button" onClick={clearHandler}>
        clear
      </button>
      <button type="button" onClick={seedHandler}>
        re-seed
      </button>
      <button type="button" onClick={tickHandler}>
        one tick
      </button>
      <button type="button" onClick={slowTickHandler}>
        slow tick
      </button>
    </div>
  );
  return content;
};

export default Controls;
