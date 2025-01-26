import { ChatConversationContainer } from "@/components/Msg/ChatConversationContainer";
import { ChatMessageInput } from "@/components/Msg/ChatMessageInput";
import { ChatUserHeader } from "@/components/Msg/ChatUserHeader";
import { useMsg } from "@/hooks/userMsg";
import { useEffect } from "react";

const MessageScree = () => {
  const { GetConversations } = useMsg();

  useEffect(() => {
    GetConversations();
  }, [GetConversations]);

  return (
    <div className="h-full ">
      <ChatUserHeader />
      <ChatConversationContainer />
      <ChatMessageInput />
    </div>
  );
};

export default MessageScree;
