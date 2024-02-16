import { configureStore } from "@reduxjs/toolkit";
import TodoStore from "./ToDoSlice";

export default configureStore({
  reducer: {
    Todo: TodoStore,
  },
});
