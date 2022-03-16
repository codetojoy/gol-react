import React from "react";
import Grid from "../components/Grid/Grid";
import Controls from "../components/Controls/Controls";
import { useAppSelector } from "../hooks";
import { IGridState } from "../store/grid/types";

import classes from "./Game.module.css";

const Game: React.FC<{}> = (props) => {
  const grid: IGridState = useAppSelector((state) => state.grid);
  return (
    <div className={classes.game}>
      <Grid />
      <hr />
      <Controls />
      <hr />
      <p>tick # {grid.tickCount}</p>
    </div>
  );
};

export default Game;
