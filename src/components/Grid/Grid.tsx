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
import { NavLink } from "react-router-dom";
import classes from "./Grid.module.css";

const Grid: React.FC<{}> = (props) => {
  return (
    <div>TODO: grid</div>
  );
};

export default Grid;
