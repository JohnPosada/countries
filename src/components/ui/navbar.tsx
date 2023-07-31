import React from "react";
import { ThemeSwitcher } from "./theme-swither";

export const Navbar = () => {
  return (
    <div className="h-20 bg-white w-full top-0 text-black flex justify-between px-4 items-center dark:bg-dark-blue dark:text-white">
      <h1 className="font-bold">Where in the world?</h1>
      <ThemeSwitcher />
    </div>
  );
};
