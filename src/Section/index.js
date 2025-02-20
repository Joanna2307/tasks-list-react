import React from "react";
import { StyledSection, HeaderSecond, SectionDiv } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <HeaderSecond>
      {title}
      {extraHeaderContent}
    </HeaderSecond>
    <SectionDiv>{body}</SectionDiv>
  </StyledSection>
);

export default Section;
