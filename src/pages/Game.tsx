import React from "react";
import { useAppDispatch } from "../hooks";
import { resetGrid, tick } from "../store/grid/actions";
import Grid from "../components/Grid/Grid";

import classes from "./Game.module.css";

const Game: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const seedHandler = () => {
    // console.log(`TRACER Game seed`);
    dispatch(resetGrid());
  };
  const tickHandler = () => {
    dispatch(tick());
    // console.log(`TRACER Game tick`);
  };
  return (
    <div className={classes.game}>
      <Grid />
      <hr />
      <div>
        <button type="button" onClick={seedHandler}>
          re-seed
        </button>
        <button type="button" onClick={tickHandler}>
          tick
        </button>
      </div>
    </div>
  );
};

export default Game;
