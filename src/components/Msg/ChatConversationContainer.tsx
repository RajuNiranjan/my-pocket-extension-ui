import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const ChatConversationContainer = () => {
  const { messages } = useSelector((state: RootState) => state.msg);
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <div className="space-y-4">
        {messages.map((msg, idx) => {
          const isMe = msg.senderId === authUser?._id;

          return (
            <div
              key={idx}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[80%]">
                <div
                  className={`
                  w-full rounded-xl p-2 text-sm font-normal 
                  ${isMe ? "bg-primary text-primary-foreground" : "bg-muted"}
                `}>
                  <p className="break-words">{msg.message}</p>
                </div>
                {msg.createdAt && (
                  <p className="text-[10px] mt-1 opacity-70 flex justify-end">
                    {new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
