import { toggleTheme } from "@/store/features/them.slice";
import { RootState } from "@/store/store";
import { SVG } from "@/utils/svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeSwitch = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <>
      <button
        className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 `}
        onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? (
          <img src={SVG.Dark} alt="dark mode" className="w-5 h-5" />
        ) : (
          <img src={SVG.Light} alt="light mode" className="w-5 h-5 invert" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
