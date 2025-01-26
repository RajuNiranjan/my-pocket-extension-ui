import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "../ui/avatar";
import { RootState } from "@/store/store";

export const ChatUserHeader = () => {
  const { selectedUser } = useSelector((state: RootState) => state.msg);

  return (
    <div>
      <div className="flex items-center gap-3 p-4 border-b">
        <Avatar>
          <AvatarImage src={selectedUser?.profilePic} />
        </Avatar>
        <div>
          <h2 className="font-semibold">{selectedUser?.userName}</h2>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </div>
    </div>
  );
};
