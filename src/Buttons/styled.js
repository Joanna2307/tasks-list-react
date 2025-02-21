import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  font-size: 18px;
`;
export const Button = styled.button`
  background-color: rgb(61, 189, 65);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(80, 225, 85);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(53, 190, 50);
  }
`;

export const ButtonRemove = styled(Button)`
  background-color: rgb(251, 6, 6);
  margin-left: 150 px;

  &:hover {
    background-color: rgb(255, 80, 80);
  }

  &:active {
    background-color: rgb(239, 24, 42);
  }
`;

export const TasksButtons = styled.button`
  color: rgb(3, 130, 130);
  background-color: transparent;
  border: none;

  &:active {
    color: rgb(148, 185, 233);
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
