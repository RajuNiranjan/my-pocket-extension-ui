import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageTypes } from "../types/message.type";
import { User } from "../types/auth.type";

const initialState: MessageTypes = {
    selectedUser: null,
    allUsers: [],
    isMessagesLoading: false,
    isUsersLoading: false
}


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        usersPending: (state) => {
            state.isUsersLoading = true
        },
        messagesPending: (state) => {
            state.isMessagesLoading = true
        },
        usersReject: (state) => {
            state.isUsersLoading = false
        },
        messagesReject: (state) => {
            state.isMessagesLoading = false
        },
        usersFullFill: (state, action: PayloadAction<User[]>) => {
            state.isUsersLoading = false;
            state.allUsers = action.payload
        }
    }
})

export const { messagesPending, messagesReject, usersPending, usersReject, usersFullFill } = messageSlice.actions

export default messageSlice.reducer