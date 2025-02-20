import React from "react";
import { List, ListItem, Button, TasksContainer, TasksButtons } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <ListItem key={task.id} hidden={hideDone && task.done}>
        <Button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <TasksContainer done={task.done}>
          {task.content} - {task.id}
        </TasksContainer>
        <TasksButtons remove onClick={() => removeTask(task.id)}>
          🗑
        </TasksButtons>
      </ListItem>
    ))}
  </List>
);

export default Tasks;
