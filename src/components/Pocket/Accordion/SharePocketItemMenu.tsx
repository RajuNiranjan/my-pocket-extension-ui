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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useMsg } from "@/hooks/userMsg";
import { useEffect } from "react";
import {setSelectedUserId} from '@/store/features/pocket.slice'
import { usePocket } from "@/hooks/usePocket";

export const SharePocketItemMenu = () => {
  const { GetChatUsers } = useMsg();
  const dispatch = useDispatch();
  const { sharePocketItem } = usePocket();
  useEffect(() => {
    GetChatUsers();
  }, [GetChatUsers]);

  const { chatUsers } = useSelector((state: RootState) => state.msg);

  const handleSharePocketItem = (userId: string) => {
    dispatch(setSelectedUserId(userId));
    sharePocketItem();
  }


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
              <div onClick={()=> handleSharePocketItem(user._id)} className="flex items-center gap-2 cursor-pointer">
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
