import React from "react";
import { StyledSection, Header, SectionDiv } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    <SectionDiv>{body}</SectionDiv>
  </StyledSection>
);

export default Section;
