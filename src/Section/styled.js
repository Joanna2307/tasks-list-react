import styled from "styled-components";

export const Section = styled.section`
  margin: 15px 0;
  background-color: white;
`;

const Header = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const HeaderFirst = styled(Header)`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const HeaderSecond = styled(Header)`
  padding: 20px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr auto auto;

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

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;

  @media (max-width: 767px) {
    padding: 0 3px;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: white;

  @media (max-width: 767px) {
    padding: 6px;
  }
`;

const ListItemDone = styled(ListItem)`
  text-decoration: line-through;
`;

const ListItemHidden = styled(ListItem)`
  display: none;
`;
