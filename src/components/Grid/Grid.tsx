import React from "react";
import classes from "./Grid.module.css";
import { useAppSelector } from "../../hooks";
import Cell from "../Cell/Cell";

const Grid: React.FC<{}> = (props) => {
  const grid = useAppSelector((state) => state.grid);
  const cells = grid.grid.theCells;
  const cellContent = cells.map((cell) => {
    return <Cell key={cell.id} cell={cell}></Cell>;
  });
  return <div className={classes.grid}>{cellContent}</div>;
};

export default Grid;
