import { ChatContainer } from "@/components/Chat/ChatContainer";
import { ChatHeader } from "@/components/Chat/ChatHeader";
import MessageInput from "@/components/Chat/MessageInput";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "@/store/features/message.slice";
import { useParams } from "react-router-dom";

const MessageScree = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(setSelectedUser(id as string));

  return (
    <div>
      <ChatHeader />
      <ChatContainer />
      <MessageInput />
    </div>
  );
};

export default MessageScree;
