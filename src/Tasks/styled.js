import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const ListItemDone = styled(ListItem)`
  text-decoration: line-through;
`;

const ListItemHidden = styled(ListItem)`
  display: none;
`;

const Button = styled.button`
  background-color: rgb(61, 189, 65);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  margin: 10px;
  transition: background 0.2s;

  &:hover {
    background-color: rgb(80, 225, 85);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(53, 190, 50);
  }
`;

const ButtonRemove = styled(Button)`
  background-color: rgb(251, 6, 6);
  margin-left: 150px;

  &:hover {
    background-color: rgb(255, 80, 80);
  }

  &:active {
    background-color: rgb(239, 24, 42);
  }
`;

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background-color: white;
`;

const TasksButtons = styled.button`
  color: rgb(3, 130, 130);
  background-color: transparent;
  border: none;
  transition: color 0.8s linear;

  &:hover {
    color: rgb(20, 160, 160);
    cursor: pointer;
  }

  &:disabled {
    color: rgb(174, 176, 176);
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
