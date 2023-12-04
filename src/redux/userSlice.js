import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUserData: (state, action) => {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { add, addUser, removeUser, updateUserData } = usersSlice.actions;

export default usersSlice.reducer;
