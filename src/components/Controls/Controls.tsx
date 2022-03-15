import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { clearGrid, resetGrid, tick } from "../../store/grid/actions";
import { slowTickAsync } from "../../store/grid/async-actions";
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

  const content = loading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.controls}>
      <Button onClick={clearHandler}>clear</Button>
      <Button onClick={seedHandler}>seed</Button>
      <Button onClick={tickHandler}>one tick</Button>
      <Button onClick={slowTickHandler}>slow tick</Button>
    </div>
  );
  return content;
};

export default Controls;
