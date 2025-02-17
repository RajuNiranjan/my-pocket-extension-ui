import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

export const ChatConversationContainer = () => {
  const { messages } = useSelector((state: RootState) => state.msg);
  const { authUser } = useSelector((state: RootState) => state.auth);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-4">
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
                  w-full rounded-t-xl p-2 text-sm font-normal 
                  ${
                    isMe
                      ? "bg-primary text-primary-foreground rounded-l-xl"
                      : "bg-muted rounded-r-xl"
                  }
                `}>
                  <p className="break-words">{msg.message}</p>
                </div>
                {msg.createdAt && (
                  <p
                    className={`text-[10px] mt-1 opacity-70 flex ${
                      isMe ? "justify-end" : "justify-start"
                    }`}>
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
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
