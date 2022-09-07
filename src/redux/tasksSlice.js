import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "todos",
  initialState:[],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date(),
        name: action.payload.task
      }
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    deleteAll: (state) => {
      state.splice(0,state.length);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, deleteAll } = tasksSlice.actions;

export default tasksSlice.reducer;
