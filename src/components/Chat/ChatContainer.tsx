import { useSelector } from "react-redux";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";

export const ChatContainer = () => {
  const { messages } = useSelector((state: RootState) => state.message);
  const { authUser } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <div className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, idx) => {
            const isMe = message.senderId === authUser?._id;

            return (
              <div
                key={idx}
                className={cn("flex", isMe ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "flex max-w-[75%] flex-col gap-1",
                    isMe && "items-end"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {!isMe && (
                      <span className="text-sm font-medium">
                        {message.senderId}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <Card
                    className={cn(
                      "rounded-2xl px-3 py-2",
                      isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    {message.message}
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
