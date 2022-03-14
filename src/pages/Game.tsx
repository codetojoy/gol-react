/*
import React from "react";

import TodoModel from "../models/Todo";

const Todo: React.FC<{ todo: TodoModel }> = (props) => {
  return (
          <li key={props.todo.id}>
            {props.todo.text} (TRACER: {props.todo.id})
          </li>
  );
};

export default Todo;
*/

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Game.module.css";

const Game: React.FC<{}> = (props) => {
    return (
      <div className={classes.game}>
        <h2>Game here</h2>
      </div>
    );
};

export default Game;
