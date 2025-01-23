import { User } from "./auth.type"

export interface MessageTypes {
    selectedUser: null | string
    allUsers: User[]
    isUsersLoading: boolean
    isMessagesLoading: boolean
}