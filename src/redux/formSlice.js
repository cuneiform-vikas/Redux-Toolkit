import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
  },
});

export const { setUser } = formSlice.actions;

export default formSlice.reducer;
