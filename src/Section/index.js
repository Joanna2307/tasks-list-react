import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__header--second">
      <h2 className="section__header">{title}</h2>

      {extraHeaderContent}
    </div>

    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />

    <div className="section__tasksContainer">{body}</div>
  </section>
);

export default Section;
