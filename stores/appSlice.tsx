import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  auth: boolean;
  simcarts: [];
  user: {};
};

const initialState: stateType = {
  auth: false,
  simcarts: [],
  user: {},
};

export const appReducer = createSlice({
  name: "simcart",
  initialState,
  reducers: {
    login: (state) => {
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
    },
    addSimcarts: (state, action) => {
      state.simcarts = action.payload;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const appActions = appReducer.actions;

export default appReducer.reducer;
