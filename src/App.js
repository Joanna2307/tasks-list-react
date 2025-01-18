import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="main">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header--first">Dodaj nowe zadanie</h2>
        <div className="section__div">
          <form className="form">
            <input
              className="form__input"
              placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="section__header--second">
          <h2 className="section__header">Lista zadań</h2>
          <div className="section__tasksButtons">
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
