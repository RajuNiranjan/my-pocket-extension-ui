import { SVG } from "@/utils/svg"
import { Card } from "../ui/card"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Input } from "../ui/input"

import { Avatar, AvatarImage } from "../ui/avatar"


export const AddNetworkCard = () => {

  const {chatUsers} = useSelector((state:RootState) => state.msg)

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input 
          placeholder="Search user" 
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500" 
        />
        <img 
          src={SVG.Search} 
          alt="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 dark:invert" 
        />
      </div>
      <div>
     {chatUsers.map((user, idx) => (
        <div
          key={idx}>
          <Card className="p-2 border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 bg-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <div>
                <Avatar className="border">
                  <AvatarImage src={user.profilePic} />
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-medium tracking-wide">{user.userName}</h1>
              </div>
            </div>
            <div>
              <img src={SVG.AddUser} alt="add" className="w-5 h-5 dark:invert cursor-pointer" />
            </div>
            </div>
          </Card>
        </div>
      ))}
      </div>
    </div>
  )
}
