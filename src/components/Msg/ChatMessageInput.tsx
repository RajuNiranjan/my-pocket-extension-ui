import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send } from "lucide-react";

export const ChatMessageInput = () => {
  const [formData, setFormData] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSentMsg = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.trim()) {
      alert("Message cannot be empty");
      return;
    }
    console.log(formData);
    setFormData("");
  };

  return (
    <div>
      <form onSubmit={handleSentMsg} className="flex items-center gap-2">
        <Input
          placeholder="hello..."
          aria-label="Type your message"
          value={formData}
          onChange={handleChangeInput}
        />
        <Button
          type="submit"
          disabled={!formData}
          aria-label="Send message"
          className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 transition">
          <Send className="h-5 w-5 text-black dark:text-white transition" />
        </Button>
      </form>
    </div>
  );
};
