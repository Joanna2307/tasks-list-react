import React from "react";
import { Section, HeaderFirst, SectionDiv } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Section>
    <HeaderFirst>
      {title}
      {extraHeaderContent}
    </HeaderFirst>
    <SectionDiv>{body}</SectionDiv>
  </Section>
);

export default Section;
