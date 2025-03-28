import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, { payload: taskId }) => {
      const task = state.tasks.find(({ id }) => id === taskId);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask: (state, { payload: taskId }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
    },
    setAllDone: (state) => {
      state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    setError: (state) => {
      state.loading = false;
    },
  },
});


export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  setError,
} = tasksSlice.actions;


export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectLoading = (state) => state.tasks.loading;


export const getTaskById = (state, taskId) =>
  state.tasks.tasks.find(({ id }) => id.toString() === taskId);

export const selectTasksByQuery = (state, query) => {
  if (!query || query.trim() === "") {
    return state.tasks.tasks;
  }

  return state.tasks.tasks.filter(({ content }) =>
    content.toLowerCase().includes(query.trim().toLowerCase())
  );
};


export default tasksSlice.reducer;
