import React from "react";
import { Wrapper, TasksButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <TasksButtons
          onClick={toggleHideDone}
          className="section__tasksButtons"
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </TasksButtons>
        <TasksButtons
          onClick={setAllDone}
          className="section__tasksButtons"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </TasksButtons>
      </>
    )}
  </Wrapper>
);

export default Buttons;
