import { ChatMessageInput } from "@/components/Msg/ChatMessageInput";
import { ChatUserHeader } from "@/components/Msg/ChatUserHeader";

const MessageScree = () => {
  return (
    <div>
      <ChatUserHeader />
      <ChatMessageInput />
    </div>
  );
};

export default MessageScree;
