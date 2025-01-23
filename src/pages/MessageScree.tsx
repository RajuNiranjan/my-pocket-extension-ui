import { ChatContainer } from "@/components/Chat/ChatContainer";
import { ChatHeader } from "@/components/Chat/ChatHeader";
import MessageInput from "@/components/Chat/MessageInput";

const MessageScree = () => {
  return (
    <div>
      <ChatHeader />
      <ChatContainer />
      <MessageInput />
    </div>
  );
};

export default MessageScree;
