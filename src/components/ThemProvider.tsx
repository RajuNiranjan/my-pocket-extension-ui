import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/store/features/them.slice";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    const localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme !== theme) {
      dispatch(setTheme(localTheme as "light" | "dark"));
    }
  }, [theme, dispatch]);

  return <>{children}</>;
};

export default ThemeProvider;
