import { ChatConversationContainer } from "@/components/Msg/ChatConversationContainer";
import { ChatMessageInput } from "@/components/Msg/ChatMessageInput";
import { ChatUserHeader } from "@/components/Msg/ChatUserHeader";
import { useMsg } from "@/hooks/userMsg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MessageScreen = () => {
  const { GetConversations } = useMsg();
  const { selectedUser } = useSelector((state: RootState) => state.msg);

  useEffect(() => {
    if (selectedUser) {
      GetConversations();
    }
  }, [GetConversations, selectedUser]);

  return (
    <div className="h-full">
      <ChatUserHeader />
      <ChatConversationContainer />
      <ChatMessageInput />
    </div>
  );
};

export default MessageScreen;
