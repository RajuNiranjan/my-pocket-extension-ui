import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link } from "react-router-dom";

export const ChatUserCard = () => {
  const { chatUsers } = useSelector((state: RootState) => state.msg);

  return (
    <div>
      {chatUsers.map((user, idx) => (
        <Link key={idx} to={`/messages/${user._id}`}>
          <Card className="p-2 border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 bg-transparent ">
            <div className="flex items-center gap-2">
              <div>
                <Avatar className="border ">
                  <AvatarImage src={user.profilePic} />
                </Avatar>
              </div>
              <div>
                <h1 className="font-medium tracking-wide">{user.userName}</h1>
                <small>Lorem ipsum dolor sit amet.</small>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
