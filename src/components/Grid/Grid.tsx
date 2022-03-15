import React from "react";
import { useAppSelector } from "../../hooks";
import { IGridState } from "../../store/grid/types";
import Row from "./Row";

import classes from "./Grid.module.css";

const Grid: React.FC<{}> = (props) => {
  const grid: IGridState = useAppSelector((state) => state.grid);
  const range = Array.from(Array(grid.numRows).keys());
  const rows = range.map((rowIndex) => {
    return <Row key={rowIndex} rowIndex={rowIndex} />;
  });
  return <div className={classes.grid}>{rows}</div>;
};

export default Grid;
