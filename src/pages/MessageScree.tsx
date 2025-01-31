import { ChatConversationContainer } from "@/components/Msg/ChatConversationContainer";
import { ChatMessageInput } from "@/components/Msg/ChatMessageInput";
import { ChatUserHeader } from "@/components/Msg/ChatUserHeader";
import { useMsg } from "@/hooks/userMsg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearMessages } from "@/store/features/msg.slice";

const MessageScreen = () => {
  const { GetConversations } = useMsg();
  const { selectedUser } = useSelector((state: RootState) => state.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      dispatch(clearMessages());
      GetConversations();
    }
  }, [GetConversations, selectedUser, dispatch]);

  return (
    <div className="h-full">
      <ChatUserHeader />
      <ChatConversationContainer />
      <ChatMessageInput />
    </div>
  );
};

export default MessageScreen;