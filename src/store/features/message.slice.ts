import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, MessageTypes } from "../types/message.type";
import { User } from "../types/auth.type";

const initialState: MessageTypes = {
  selectedUser: null,
  allUsers: [],
  messages: [],
  isMessagesLoading: false,
  isUsersLoading: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {

    messagesPending: (state) => {
      state.isMessagesLoading = true;
    },
    messageFullFill: (state, action: PayloadAction<Message[]>) => {
      state.isMessagesLoading = false;
      state.messages = action.payload
    },
    messagesReject: (state) => {
      state.isMessagesLoading = false;
    },
    usersPending: (state) => {
      state.isUsersLoading = true;
    },
    usersReject: (state) => {
      state.isUsersLoading = false;
    },
    usersFullFill: (state, action: PayloadAction<User[]>) => {
      state.isUsersLoading = false;
      state.allUsers = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  messagesPending,
  messagesReject,
  usersPending,
  usersReject,
  usersFullFill,
  messageFullFill,
  setSelectedUser,
} = messageSlice.actions;

export default messageSlice.reducer;
