import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.length = 0; // Clear the current state
      state.push(...action.payload); // Push new elements into the existing state
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { add, addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
