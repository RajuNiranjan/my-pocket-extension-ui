import { SVG } from "@/utils/svg"
import { Card } from "../ui/card"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Input } from "../ui/input"


export const AddToFriendCard = () => {

  const {chatUsers} = useSelector((state:RootState) => state.msg)

  return (
    <div className="space-y-4 p-4">
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

      <div className="space-y-3">
      {
        chatUsers.map((user, idx) => (
          <Card 
            key={idx} 
            className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <img 
                src={user.profilePic} 
                alt={user.userName} 
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700" 
              />
              <p className="text-gray-900 dark:text-gray-100 font-medium">{user.userName}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
              <img src={SVG.AddUser} alt="Add user" className="dark:invert w-5 h-5" />
            </button>
          </Card>
        ))
      }
      </div>
    </div>
  )
}
