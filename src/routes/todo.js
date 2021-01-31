import React from "react";
import { useStateContext } from "../state";

const Todos = () => {
  const {
    state: {
      todo: { all }
    },
    dispatch
  } = useStateContext();

  return (
    <>
      <p onClick={() => dispatch("todo|add", prompt("What?"))}>
        Let's check some todos!
      </p>
      <ul>
        {all.map((todo, index) => (
          <li onClick={() => dispatch("todo|remove", index)}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

Todos.route = {
  path: "/todos"
};

export default Todos;
