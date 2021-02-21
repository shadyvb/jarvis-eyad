import React from "react";
import { useStateContext } from "../state";

const Journal = () => {
  const {
    state: {
      school: { subjects }
    },
    dispatch
  } = useStateContext();

  return (
    <>
      <p onClick={() => dispatch("journal|subject|add", prompt("Name ?"))}>
        Add a subject
      </p>
      <ul>
        {Object.keys(subjects).map((index) => (
          <li onClick={() => dispatch("journal|subject|remove", index)}>
            {subjects[index]}
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
