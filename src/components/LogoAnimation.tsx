import { SVG } from "../utils/svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const LogoAnimation = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  return (
    <NavLink
      to={authUser ? "/" : "/welcome"}
      className="w-full flex justify-center items-center">
      <img
        src={SVG.Logo}
        alt="Logo"
        className="w-10 h-10 rounded-xl animate-float"
      />
    </NavLink>
  );
};
