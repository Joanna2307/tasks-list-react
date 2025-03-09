import React from "react";
import { List, ListItem, Button, TasksContainer } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <ListItem key={task.id} $hidden={hideDone && task.done}>
        <Button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <TasksContainer $done={task.done}>{task.content}</TasksContainer>
        <Button $remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </ListItem>
    ))}
  </List>
);

export default TaskList;
