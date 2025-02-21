import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #ddd;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  background-color: ${({ remove }) => (remove ? "rgb(239, 24, 42)" : "green")};
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  margin: 10px;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ $remove }) =>
      $remove ? "rgb(255, 80, 80)" : "rgb(80, 225, 85)"};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ $remove }) =>
      $remove ? "rgb(239, 24, 42)" : "rgb(53, 190, 50)"};
  }

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: rgb(251, 6, 6);
      margin-left: 150px;

      &:hover {
        background-color: rgb(255, 80, 80);
      }

      &:active {
        background-color: rgb(239, 24, 42);
      }
    `}
`;

export const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background-color: white;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;
