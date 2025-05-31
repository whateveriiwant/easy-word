import { useLocation } from "react-router-dom";
import Logo from "../assets/header/logo.svg?react";

export const Header = () => {
  const location = useLocation();

  return (
    <div
      className={`w-full h-auto py-6 px-10 flex flex-row items-center ${
        location.pathname === "/" ? "justify-end" : "justify-between"
      }`}
    >
      {location.pathname === "/" ? "" : <Logo width="10rem" />}
      <p className="text-gray text-2xl font-light hover:cursor-pointer duration-300 transition-colors hover:text-gray-500">
        바꾼 기록
      </p>
    </div>
  );
};
