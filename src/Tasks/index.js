import React from "react";
import "./style.css";

const Tasks = (props) => (
  <ul className="section__list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`${
          props.hideDoneTasks && task.done ? "section__listItem--hidden" : ""
        }`}
      >
        <button className="section__button">{task.done ? "✔" : ""}</button>
        <span className={task.done ? "section__listItem--done" : ""}>
          {task.content}
        </span>
        <button className="section__button section__buttonRemove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
