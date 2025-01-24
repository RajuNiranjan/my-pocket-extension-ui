import { User } from "./auth.type"

export interface Message {
    senderId: string
    receiverId: string
    message: string
    createdAt: string
    UpdatedAt: string
}


export interface MessageTypes {
    selectedUser: User | null
    allUsers: User[]
    messages: Message[]
    isUsersLoading: boolean
    isMessagesLoading: boolean
}