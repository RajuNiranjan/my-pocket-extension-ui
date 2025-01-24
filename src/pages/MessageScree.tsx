import { ChatContainer } from "@/components/Chat/ChatContainer";
import { ChatHeader } from "@/components/Chat/ChatHeader";
import MessageInput from "@/components/Chat/MessageInput";
import { useMessage } from "@/hooks/useMessage";
import { useEffect } from "react";

const MessageScree = () => {
  const { GetConversation } = useMessage();

  useEffect(() => {
    GetConversation();
  }, []);

  return (
    <div>
      <ChatHeader />
      <ChatContainer />
      <MessageInput />
    </div>
  );
};

export default MessageScree;
