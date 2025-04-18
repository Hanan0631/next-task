import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    clearUser: (state) => {
      state.selectedUser = null;
    },
  },
});

export default usersSlice.reducer;
export const { selectUser, clearUser } = usersSlice.actions;
