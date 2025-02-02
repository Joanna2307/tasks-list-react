import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="section__tasksButtons">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="section__tasksButtons"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
