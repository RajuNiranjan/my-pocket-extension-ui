import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LogoAnimation } from "./LogoAnimation";

export const Header = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  console.log();

  return (
    <nav className="h-10 sticky top-0 z-50 flex justify-between items-center  ">
      <LogoAnimation />
      <NavLink to="/profile">
        <img
          src={authUser?.profilePic}
          alt="Logo"
          className="w-10 h-10 rounded-full cursor-pointer "
        />
      </NavLink>
    </nav>
  );
};
