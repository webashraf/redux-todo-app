import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});
export const { addTodos } = todoSlice.actions;

export default todoSlice.reducer;
