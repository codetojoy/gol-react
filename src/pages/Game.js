import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Game.module.css";

const Game = (props) => {
    return (
      <div className={classes.game}>
        <h2>Game here</h2>
      </div>
    );
};

export default Game;
