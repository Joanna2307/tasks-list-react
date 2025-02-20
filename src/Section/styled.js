import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 15px 0;
  background-color: white;
`;

export const Header = styled.h2`
  font-size: 20px;
  margin: 0;

  ${({ first }) =>
    first &&
    css`
      padding: 15px;
      border-bottom: 1px solid #ddd;
      display: grid;
      grid-template-columns: 1fr auto auto;
    `};

  ${({ second }) =>
    second &&
    css`
      padding: 20px;
      font-size: 15px;
      border-bottom: 1px solid #ddd;
      display: grid;
      grid-template-columns: 1fr auto auto;
    `};

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SectionDiv = styled.div`
  padding: 15px;

  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;
