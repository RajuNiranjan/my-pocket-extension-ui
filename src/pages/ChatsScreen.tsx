import { SVG } from "@/utils/svg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { ChatUserCard } from "@/components/Msg/ChatUserCard";
import { useMsg } from "@/hooks/userMsg";
import { AddNetworkCard } from "@/components/Network/AddNetworkCard";

const ChatsScreen = () => {
  const { GetChatUsers } = useMsg();

  useEffect(() => {
    GetChatUsers();
  }, [GetChatUsers]);

  return (
    <div className="space-y-1 overflow-y-auto">
      <Tabs defaultValue="chats" className="w-full">
        <TabsList className="w-full bg-transparent">
          <TabsTrigger
            value="chats"
            className="w-full data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-yellow-300 dark:data-[state=active]:border-yellow-500 bg-transparent flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <img src={SVG.Chat} alt="Chat" className="w-5 h-5 dark:invert" />
            Chats
          </TabsTrigger>
          <TabsTrigger
            value="groups"
            className="w-full data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-yellow-300 dark:data-[state=active]:border-yellow-500 bg-transparent flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            {" "}
            <img src={SVG.Group} alt="Chat" className="w-5 h-5 dark:invert" />
            Groups
          </TabsTrigger>
          <TabsTrigger
            value="mutual"
            className="w-full data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-yellow-300 dark:data-[state=active]:border-yellow-500 bg-transparent flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            {" "}
            <img src={SVG.AddUser} alt="Mutual" className="w-5 h-5 dark:invert" />
            Add To Network
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chats" className="dark:bg-gray-900">
          <ChatUserCard />
        </TabsContent>
        <TabsContent value="groups" className="dark:bg-gray-900">
          Groups Will comes here soon
        </TabsContent>
        <TabsContent value="mutual" className="dark:bg-gray-900">
          add network soon
          {/* <AddNetworkCard /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatsScreen;
