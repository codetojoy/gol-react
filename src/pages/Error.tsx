
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

const Error: React.FC<{}> = (props) => {
    return <p>Error page</p>;
}

export default Error;
