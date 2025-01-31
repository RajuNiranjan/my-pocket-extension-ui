import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MsgType, Msg } from "../types/msg.type";
import { User } from "../types/auth.type";

const initialState: MsgType = {
  chatUsers: [],
  messages: [],
  selectedUser: null,
  isChatUsersLoading: false,
  isConversationLoading: false,
};

const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    usersPending: (state) => {
      state.isChatUsersLoading = true;
    },
    usersFullFill: (state, action: PayloadAction<User[]>) => {
      state.isChatUsersLoading = false;
      state.chatUsers = action.payload;
    },
    usersReject: (state) => {
      state.isChatUsersLoading = false;
    },
    chatPending: (state) => {
      state.isConversationLoading = true;
    },
    chatFullFill: (state, action: PayloadAction<Msg[]>) => {
      state.isConversationLoading = false;
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Msg>) => {
      state.messages.push(action.payload);
    },
    chatReject: (state) => {
      state.isConversationLoading = false;
    },
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
      state.messages = []; // Clear messages when switching users
    },
  },
});

export const {
  usersFullFill,
  chatFullFill,
  chatPending,
  chatReject,
  usersPending,
  usersReject,
  setSelectedUser,
  addMessage,
} = msgSlice.actions;

export default msgSlice.reducer;
