import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const MessageCard = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full h-14 border dark:border-gray-700 rounded-lg p-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
      <div className="flex items-center gap-2">
        <div className="">
          <img
            src={authUser?.profilePic}
            alt="user_pic"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <h1 className="dark:text-white">{authUser?.userName}</h1>
          <small className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet.
          </small>
        </div>
      </div>
      <div>
        <small className="h-5 w-5 bg-yellow-300 dark:bg-yellow-500 flex justify-center items-center rounded-full font-medium">
          2
        </small>
      </div>
    </div>
  );
};
