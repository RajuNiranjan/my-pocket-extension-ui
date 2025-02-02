import { SVG } from "@/utils/svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useMsg } from "@/hooks/userMsg";
import { useEffect } from "react";

export const SharePocketItemMenu = () => {
  const { GetChatUsers } = useMsg();

  useEffect(() => {
    GetChatUsers();
  }, [GetChatUsers]);

  const { chatUsers } = useSelector((state: RootState) => state.msg);

  console.log("chat users", chatUsers);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src={SVG.Share}
            alt=""
            className="w-5 h-5 dark:invert cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Input placeholder="search with email" className="font-normal" />
            <Button className="bg-transparent p-0 m-0 border-none shadow-none">
              <Search className="dark:invert text-black" />
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {chatUsers.map((user, idx) => (
            <DropdownMenuItem key={idx}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={user.profilePic} alt="" className="h-5 w-5" />
                <p>{user.email}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
