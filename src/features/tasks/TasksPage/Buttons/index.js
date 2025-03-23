import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, TasksButtons } from "./styled";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../../tasksSlice";
import ExampleButton from "../ExampleButton";


const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ExampleButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </ExampleButton>

      {tasks.length > 0 && (
        <>
          <TasksButtons onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </TasksButtons>
          <TasksButtons
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </TasksButtons>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
