import React from "react";
import { Wrapper, TasksButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <TasksButtons onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </TasksButtons>
        <TasksButtons
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </TasksButtons>
      </>
    )}
  </Wrapper>
);

export default Buttons;
