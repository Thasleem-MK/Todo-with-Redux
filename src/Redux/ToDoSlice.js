import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
  name: "TODO",
  initialState: {
    Button: "ADD",
    InputValue: "",
    UpdatedIndux: 0,
    Element: {
      ID: "",
      Content: "",
      Complete: false,
    },
    Todos: [],
  },
  reducers: {
    button: (state, action) => {
      state.Button = action.payload.value;
    },
    InputValue: (state, action) => {
      state.InputValue = action.payload.value;
    },
    element: (state, action) => {
      state.Element.ID = action.payload.ID;
      state.Element.Content = action.payload.value;
    },
    Add: (state, action) => {
      state.Todos = [...state.Todos, action.payload.value];
    },
    Del: (state, action) => {
      state.Todos.splice(action.payload.value, 1);
    },
    Complete: (state, action) => {
      state.Todos[action.payload.value].Complete =
        !state.Todos[action.payload.value].Complete;
    },
    UpdateIndex: (state, action) => {
      state.UpdatedIndux = action.payload.value;
    },
    Update: (state, action) => {
      state.Todos[state.UpdatedIndux].Content = action.payload.value;
    },
  },
});
export const {
  button,
  InputValue,
  element,
  Add,
  Del,
  Complete,
  Update,
  UpdateIndex,
} = ToDoSlice.actions;
export default ToDoSlice.reducer;
