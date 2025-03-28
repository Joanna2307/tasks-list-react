import styled from "styled-components";

export default styled.button`
  background: transparent;
  color: black;
  margin: 0 0 0 20px;
  transition: filter 0.3s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
