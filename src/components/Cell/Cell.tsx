import React from "react";
import classes from "./Cell.module.css";
import CellModel from "../../models/Cell";

const Cell: React.FC<{ cell: CellModel }> = (props) => {
  const className = props.cell.isAlive() ? classes.cellAlive : classes.cellDead;
  return <div className={className}></div>;
};

export default Cell;
