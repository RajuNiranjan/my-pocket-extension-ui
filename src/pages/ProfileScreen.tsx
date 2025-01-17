import { useAuth } from "../hooks/useAuth.hook";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SVG } from "@/utils/svg";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { toggleTheme } from "@/store/features/them.slice";

const ProfileScreen = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  const { logout } = useAuth();

  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div>
      <div className="flex justify-end items-center ">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-all duration-300">
          <img
            onClick={() => logout()}
            src={SVG.Logout}
            alt="logout"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
      <div className="space-y-4 select-none">
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center">
            <img src={authUser?.profilePic} alt="user" />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="userName" className="text-sm font-normal">
            User Name
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img src={SVG.User} alt="lock_icon" className="w-5 h-5" />
            </div>
            <Input
              value={authUser?.userName}
              className="py-5 border w-full rounded-lg px-10"
              disabled
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="userName" className="text-sm font-normal">
            Email
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img src={SVG.Mail} alt="lock_icon" className="w-5 h-5" />
            </div>
            <Input
              value={authUser?.email}
              className="py-5 border w-full rounded-lg px-10"
              disabled
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-all duration-300"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <img src={SVG.Dark} alt="dark mode" className="w-5 h-5" />
          ) : (
            <img src={SVG.Light} alt="light mode" className="w-5 h-5" />
          )}
        </button>
      </div> */}
    </div>
  );
};

export default ProfileScreen;
