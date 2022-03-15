import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { clearGrid, resetGrid, tick } from "../../store/grid/actions";
import { slowTickAsync } from "../../store/grid/async-actions";
import { IGridState } from "../../store/grid/types";
import { IConfigState } from "../../store/config/types";

import classes from "./Controls.module.css";

const Controls: React.FC<{}> = (props) => {
  const grid: IGridState = useAppSelector((state) => state.grid);
  const config: IConfigState = useAppSelector((state) => state.config);
  const loading: boolean = grid.loading;
  const dispatch = useAppDispatch();
  const clearHandler = () => {
    dispatch(clearGrid());
  };
  const seedHandler = () => {
    dispatch(resetGrid(config.numRows, config.numCols));
  };
  const tickHandler = () => {
    dispatch(tick());
  };
  const slowTickHandler = async () => {
    slowTickAsync(dispatch);
  };

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
        seed
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
