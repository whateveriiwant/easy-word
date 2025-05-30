import Logo from "../assets/header/logo.svg?react";

export const Header = () => {
  return (
    <div className="w-full h-auto py-6 px-10 flex flex-row items-center justify-between">
      {<Logo width="10rem" />}
      <p className="text-gray text-2xl font-light hover:cursor-pointer duration-300 transition-colors hover:text-gray-500">
        바꾼 기록
      </p>
    </div>
  );
};
