import { RootState } from "@/store/store";
import { SVG } from "@/utils/svg";

import { useSelector } from "react-redux";

export const ChatHeader = () => {
  const { selectedUser } = useSelector((state: RootState) => state.message);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={selectedUser?.profilePic} alt="" className="w-10 h-10" />
        <div>
          <h1>{selectedUser?.userName}</h1>
        </div>
      </div>
      <div>
        <img src={SVG.Ellips} alt="" className="h-5 w-5 dark:invert" />
      </div>
    </div>
  );
};
