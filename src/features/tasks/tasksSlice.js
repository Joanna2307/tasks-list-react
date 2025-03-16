import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
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
      const index = state.tasks.findIndex(({ id }) => id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    setAllDone: (state) => {
      state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
    },

    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
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
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
