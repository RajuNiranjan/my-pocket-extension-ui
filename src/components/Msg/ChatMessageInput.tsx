import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send } from "lucide-react";
import { useSocket } from "@/hooks/useSocket";

export const ChatMessageInput = () => {
  const [formData, setFormData] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { sendMessage } = useSocket();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSentMsg = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.trim() || isSending) {
      return;
    }

    try {
      setIsSending(true);
      await sendMessage(formData);
      setFormData("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSentMsg} className="flex items-center gap-2">
        <Input
          placeholder="Type a message..."
          aria-label="Type your message"
          value={formData}
          onChange={handleChangeInput}
          disabled={isSending}
        />
        <Button
          type="submit"
          disabled={!formData.trim() || isSending}
          aria-label="Send message"
          className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 transition">
          <Send className="h-5 w-5 text-black dark:text-white transition" />
        </Button>
      </form>
    </div>
  );
};
