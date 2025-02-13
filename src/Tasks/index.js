import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="section__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`section__listItem${
          hideDone && task.done ? " section__listItem--hidden" : ""
        }`}
      >
        <button
          className="section__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={task.done ? "section__listItem--done" : ""}>
          {task.content} - {task.id}
        </span>
        <button
          className="section__button section__buttonRemove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
