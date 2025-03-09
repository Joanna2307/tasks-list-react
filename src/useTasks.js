import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addNewTask = (content) => {
    setTasks((tasks) => [...tasks, { id: Date.now(), content, done: false }]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const toggleHideDone = () => {
    setHideDone((prevHideDone) => !prevHideDone);
  };

  return {
    tasks,
    hideDone,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    toggleHideDone,
  };
};

export default useTasks;
