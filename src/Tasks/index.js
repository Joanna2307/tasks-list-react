import React from "react";
import {
  List,
  ListItem,
  ListItemDone,
  ListItemHidden,
  Button,
  ButtonRemove,
} from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <ListItem
        key={task.id}
        as={hideDone && task.done ? ListItemHidden : "li"}
      >
        <Button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <span>
          {task.done ? (
            <ListItemDone>{task.content}</ListItemDone>
          ) : (
            task.content
          )}
        </span>
        <ButtonRemove onClick={() => removeTask(task.id)}>🗑</ButtonRemove>
      </ListItem>
    ))}
  </List>
);

export default Tasks;
