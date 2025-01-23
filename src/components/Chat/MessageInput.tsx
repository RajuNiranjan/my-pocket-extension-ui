import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="border-t p-4">
      <form className="flex gap-2">
        <Input
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
