import React from "react";
import { useStateContext } from "../state";

const Journal = () => {
  const {
    state: {
      journal: { items }
    },
    dispatch
  } = useStateContext();

  return (
    <>
      <p onClick={() => dispatch("journal|add", prompt("What?"))}>
        Let's check some todos!
      </p>
      <ul>
        {Object.keys(items).map((index) => (
          <li onClick={() => dispatch("journal|remove", index)}>
            {items[index]}
          </li>
        ))}
      </ul>
    </>
  );
};

Journal.route = {
  path: "/journal"
};

export default Journal;
