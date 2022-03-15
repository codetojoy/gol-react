import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IGridState } from "../../store/grid/types";
import { resetGrid } from "../../store/grid/actions";
import { IConfigState } from "../../store/config/types";
import Row from "./Row";

import classes from "./Grid.module.css";

const Grid: React.FC<{}> = (props) => {
  const grid: IGridState = useAppSelector((state) => state.grid);
  const config: IConfigState = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!grid.initialized) {
      console.log(`TRACER Grid :: initializing`);
      const numRows = config.numRows;
      const numCols = config.numCols;
      dispatch(resetGrid(numRows, numCols));
    }
  }, [grid, config, dispatch]);
  const range = Array.from(Array(grid.numRows).keys());
  const rows = range.map((rowIndex) => {
    return <Row key={rowIndex} rowIndex={rowIndex} />;
  });
  return <div className={classes.grid}>{rows}</div>;
};

export default Grid;
