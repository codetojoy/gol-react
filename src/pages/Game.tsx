import React from "react";
import Grid from "../components/Grid/Grid";
import Controls from "../components/Controls/Controls";

import classes from "./Game.module.css";

const Game: React.FC<{}> = (props) => {
  return (
    <div className={classes.game}>
      <Grid />
      <hr />
      <Controls />
    </div>
  );
};

export default Game;
