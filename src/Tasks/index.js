import React from "react";
import {
  List,
  ListItem,
  ListItemDone,
  ListItemHidden,
  Button,
  ButtonRemove,
  TasksContainer,
  TasksButtons,
} from "./styled";

const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
  markAllDone,
}) => (
  <Section>
    <HeaderFirst>Lista zadań</HeaderFirst>
    <SectionDiv>
      <TasksContainer>
        <TasksButtons
          onClick={markAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Zaznacz wszystkie jako ukończone
        </TasksButtons>
      </TasksContainer>
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
    </SectionDiv>
  </Section>
);

export default Tasks;
