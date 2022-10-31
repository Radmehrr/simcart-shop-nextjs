import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  auth: boolean;
  simcarts: [];
  user: {};
  tickets: [];
  messages: [];
  ticket: {};
  users: [];
  orders: [];
  order: {};
  adminAllTickets: [];
  adminTicketItem: [];
  mySimcarts: any[];
};

const initialState: stateType = {
  auth: false,
  simcarts: [],
  user: {},
  tickets: [],
  messages: [],
  ticket: {},
  users: [],
  orders: [],
  order: {},
  adminAllTickets: [],
  adminTicketItem: [],
  mySimcarts: [],
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
    addTickets: (state, action) => {
      state.tickets = action.payload;
    },
    addTicket: (state, action) => {
      state.ticket = action.payload;
    },
    addMessage: (state, action) => {
      state.messages = action.payload;
    },
    updateMessage: (state, action) => {
      state.messages = action.payload;
    },
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    addOrders: (state, action) => {
      state.orders = action.payload;
    },
    updateAdminOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrderItem: (state, action) => {
      state.order = action.payload;
    },
    addAdminTickets: (state, action) => {
      state.adminAllTickets = action.payload;
    },
    addAdminTicketItem: (state, action) => {
      state.adminTicketItem = action.payload;
    },
    addMySimcarts: (state, action) => {
      state.mySimcarts = action.payload;
    },
  },
});

export const appActions = appReducer.actions;

export default appReducer.reducer;
