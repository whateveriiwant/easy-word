import { Header } from "../components/Header";
import Logo from "../assets/header/logo.svg?react";

export const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Logo width="17rem" />
        <div className="w-[45rem] h-[7rem] mt-8 rounded-xl border border-gray"></div>
      </div>
    </div>
  );
};
