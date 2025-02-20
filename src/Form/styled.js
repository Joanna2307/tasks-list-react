import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin-top: -10px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  height: 40px;
  box-sizing: border-box;
  font-size: 16px;

  &:active {
    border: black;
  }

  @media (max-width: 767px) {
    height: 40px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: rgb(2, 128, 128);
  border: none;
  transition: transform 0.25s linear, background 0.75s linear;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background-color: rgb(32, 160, 160);
    transform: scale(1.025);
    cursor: pointer;
  }

  &:active {
    outline: 1px solid teal;
    color: rgb(1, 96, 96);
    transform: scale(1);
  }

  @media (max-width: 767px) {
    height: 40px;
    font-size: 16px;
  }
`;
