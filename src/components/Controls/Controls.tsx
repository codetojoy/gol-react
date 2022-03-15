import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { clearGrid, resetGrid, tick } from "../../store/grid/actions";
import { slowTickAsync, startTicksAsync } from "../../store/grid/async-actions";
import { IGridState } from "../../store/grid/types";
import { IConfigState } from "../../store/config/types";
import LoadingSpinner from "../UI/LoadingSpinner";
import Button from "../UI/Button/Button";

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
  const startTicksHandler = async () => {
    startTicksAsync(dispatch);
  };

  const content = loading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.controls}>
      <div>
        <Button onClick={clearHandler}>clear</Button>
      </div>
      <div>
        <Button onClick={seedHandler}>seed</Button>
      </div>
      <div>
        <Button onClick={tickHandler}>one tick</Button>
      </div>
      <div>
        <Button onClick={slowTickHandler}>slow tick</Button>
      </div>
      <div>
        <Button onClick={startTicksHandler}>start ticks</Button>
      </div>
    </div>
  );
  return content;
};

export default Controls;
