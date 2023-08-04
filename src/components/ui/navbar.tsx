import React from "react";
import { ThemeSwitcher } from "./theme-swither";

export const Navbar = () => {
  return (
    <div className="top-0 flex h-20 w-full items-center justify-between bg-white px-4 text-black dark:bg-dark-blue dark:text-white">
      <h1 className="font-bold">Where in the world?</h1>
      <ThemeSwitcher />
    </div>
  );
};
