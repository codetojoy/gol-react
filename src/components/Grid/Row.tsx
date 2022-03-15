import React from "react";
import classes from "./Row.module.css";
import { useAppSelector } from "../../hooks";
import Cell from "../Cell/Cell";

const Row: React.FC<{ rowIndex: number }> = (props) => {
  const grid = useAppSelector((state) => state.grid);
  const cells = grid.grid.getRow(props.rowIndex, grid.numCols);
  /*
  cells.forEach((c) => {
    console.log(`TRACER Row ${props.rowIndex} id: ${c.id}`);
  });
  */
  const cellContent = cells.map((cell) => {
    return <Cell key={cell.id} cell={cell}></Cell>;
  });
  return <div className={classes.row}>{cellContent}</div>;
};

export default Row;
