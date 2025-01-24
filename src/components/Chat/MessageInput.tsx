import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { useMessage } from "@/hooks/useMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { SendMessage } = useMessage();

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SendMessage(message, setMessage);
  };

  return (
    <div className="border-t p-4">
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="min-h-[2.5rem] max-h-32 border-gray-100 resize-none"
        />
        <Button type="submit" size="icon">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
