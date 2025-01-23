import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
  isMe: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    content: "Hey! How are you?",
    sender: "John Doe",
    timestamp: "2:30 PM",
    isMe: false,
  },
  {
    id: 2,
    content: "I'm good, thanks! How about you?",
    sender: "Me",
    timestamp: "2:31 PM",
    isMe: true,
  },
  {
    id: 3,
    content: "Pretty good! Working on that new project we discussed.",
    sender: "John Doe",
    timestamp: "2:32 PM",
    isMe: false,
  },
  {
    id: 4,
    content: "That's great! Need any help with it?",
    sender: "Me",
    timestamp: "2:33 PM",
    isMe: true,
  },
  {
    id: 5,
    content:
      "Actually yes! Could you take a look at the design files when you have a moment?",
    sender: "John Doe",
    timestamp: "2:34 PM",
    isMe: false,
  },
];

export const ChatContainer = () => {
  return (
    <div>
      <div className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.isMe ? "justify-end" : "justify-start"
              )}>
              <div
                className={cn(
                  "flex max-w-[75%] flex-col gap-1",
                  message.isMe && "items-end"
                )}>
                <div className="flex items-center gap-2">
                  {!message.isMe && (
                    <span className="text-sm font-medium">
                      {message.sender}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
                <Card
                  className={cn(
                    "rounded-2xl px-3 py-2",
                    message.isMe
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}>
                  {message.content}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
