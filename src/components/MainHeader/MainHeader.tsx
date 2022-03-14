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
import classes from "./MainHeader.module.css";

const MainHeader: React.FC<{}>  = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/game">
              Game
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/config">
              Config 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
