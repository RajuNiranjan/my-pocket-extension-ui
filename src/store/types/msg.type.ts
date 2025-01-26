import { User } from "./auth.type";

export interface Msg {
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface MsgType {
  messages: Msg[];
  chatUsers: User[];
  selectedUser: User | null;
  isConversationLoading: boolean;
  isChatUsersLoading: boolean;
}
