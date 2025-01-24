import { User } from "./auth.type"

export interface Message {
    senderId: string
    receiverId: string
    message: string
    createdAt: string
    UpdatedAt: string
}


export interface MessageTypes {
    selectedUser: null | string
    allUsers: User[]
    messages: Message[]
    isUsersLoading: boolean
    isMessagesLoading: boolean
}