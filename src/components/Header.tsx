import { NavLink } from "react-router-dom";
import { SVG } from "../utils/svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  console.log();

  return (
    <nav className="h-10 sticky top-0 z-50 flex justify-between items-center  ">
      <NavLink to="/">
        <img
          src={SVG.Logo}
          alt="Logo"
          className="w-10 h-10 rounded-xl animate-float"
        />
      </NavLink>
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

export default Header;
