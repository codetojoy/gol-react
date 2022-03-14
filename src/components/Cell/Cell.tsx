import React from "react";
import classes from "./Cell.module.css";
import CellModel from "../../models/Cell";
import { useAppDispatch } from "../../hooks";
import { toggleCell } from "../../store/grid/actions";

const Cell: React.FC<{ cell: CellModel }> = (props) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(toggleCell(props.cell.id));
  };

  const className = props.cell.isAlive() ? classes.cellAlive : classes.cellDead;
  return <div onClick={clickHandler} className={className}></div>;
};

export default Cell;
