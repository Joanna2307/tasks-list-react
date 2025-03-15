import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Button, TasksContainer } from "./styled";
import { selectTasks, removeTask, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} $hidden={hideDone && task.done}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <TasksContainer $done={task.done}>{task.content}</TasksContainer>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
