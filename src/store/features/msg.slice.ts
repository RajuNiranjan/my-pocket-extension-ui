import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MsgType, Msg } from "../types/msg.type";
import { User } from "../types/auth.type";

const initialState: MsgType = {
  chatUsers: [],
  messages: [],
  selectedUserId: null,
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
      state.isConversationLoading = false;
    },
    chatFullFill: (state, action: PayloadAction<Msg[]>) => {
      state.isConversationLoading = false;
      state.messages = action.payload;
    },
    chatReject: (state) => {
      state.isConversationLoading = false;
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
} = msgSlice.actions;

export default msgSlice.reducer;
