import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link } from "react-router-dom";
import { setSelectedUser } from "../../store/features/msg.slice";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axios";

interface LastMessage {
  message: string;
  createdAt: string;
}

export const ChatUserCard = () => {
  const { chatUsers } = useSelector((state: RootState) => state.msg);
  const dispatch = useDispatch();
  const [lastMessages, setLastMessages] = useState<Record<string, LastMessage>>({});

  useEffect(() => {
    const fetchLastMessages = async () => {
      const token = localStorage.getItem("pocket");
      
      try {
        const promises = chatUsers.map(async (user) => {
          const response = await axiosInstance.get(`/msg/${user._id}/last`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return { userId: user._id, message: response.data };
        });

        const results = await Promise.all(promises);
        const messagesMap = results.reduce((acc, { userId, message }) => {
          acc[userId] = message;
          return acc;
        }, {} as Record<string, LastMessage>);

        setLastMessages(messagesMap);
      } catch (error) {
        console.error("Error fetching last messages:", error);
      }
    };

    if (chatUsers.length > 0) {
      fetchLastMessages();
    }
  }, [chatUsers]);

  return (
    <div>
      {chatUsers.map((user, idx) => (
        <Link
          key={idx}
          to={`/messages/${user._id}`}
          onClick={() => dispatch(setSelectedUser(user))}>
          <Card className="p-2 border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 bg-transparent">
            <div className="flex items-center gap-2">
              <div>
                <Avatar className="border">
                  <AvatarImage src={user.profilePic} />
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-medium tracking-wide">{user.userName}</h1>
                <p className="text-sm text-muted-foreground truncate">
                  {lastMessages[user._id]?.message || "No messages yet"}
                </p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
