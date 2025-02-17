import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LogoAnimation } from "./LogoAnimation";
import { SVG } from "../utils/svg";
import ThemeSwitch from "./ThemeControllers/ThemeSwitch";
// import { NotificationsMenu } from "./NotificationsMenu/NotificationsMenu";

export const Header = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <nav className="h-14 mb-4 sticky top-0 z-50 flex justify-between items-center backdrop-blur-md p-4">
      <div>
        <LogoAnimation />
      </div>
      <div className="flex items-center  gap-4">
        <NavLink to="/chats">
          <img
            src={SVG.Message}
            alt="Logo"
            className="w-5 h-5 rounded-full cursor-pointer dark:invert"
          />
        </NavLink>

        {/* <NotificationsMenu /> */}

        <ThemeSwitch />

        <NavLink to="/profile">
          <img
            src={authUser?.profilePic}
            alt={SVG.User}
            className="w-7 h-7 rounded-full cursor-pointer border-2 border-gray-200 dark:border-gray-700"
          />
        </NavLink>
      </div>
    </nav>
  );
};
