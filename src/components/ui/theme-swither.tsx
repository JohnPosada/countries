"use client";

import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme} className="flex items-center text-sm gap-2">
        {theme === "light" ? <FaRegMoon /> : <FaMoon />}
        Dark mode
      </button>
    </div>
  );
};
