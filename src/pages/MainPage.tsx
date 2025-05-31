import { Header } from "../components/Header";
import Logo from "../assets/header/logo.svg?react";
import { Footer } from "../components/Footer";
import Age from "../assets/age.svg?react";
import Field from "../assets/field.svg?react";
import Change from "../assets/change.svg?react";

export const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Logo width="17rem" />
        <div className="flex flex-col items-start justify-between w-[45rem] min-h-[7rem] max-h-[20rem] mt-8 rounded-xl border border-gray">
          <textarea
            className="w-full text-lg px-4 py-3 rounded-2xl focus:outline-none resize-none overflow-hidden"
            placeholder="여기에 글을 입력하면 쉽게 바꿀 수 있어요"
            rows={1}
            style={{ minHeight: "3rem" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = Math.max(target.scrollHeight, 48) + "px";
            }}
          />
          <div className="flex flex-row justify-between items-center w-full pl-4 pr-2">
            <div className="flex flex-row">
              <div className="w-auto h-auto flex flex-row items-center justify-center group hover:cursor-pointer">
                <Age
                  width="1.5rem"
                  fill="none"
                  stroke="#A9A9A9"
                  className="group-hover:stroke-gray-500 duration-300 transition-colors"
                />
                <p className="text-gray text-lg ml-1 duration-300 transition-colors group-hover:text-gray-500">나이</p>
              </div>
              <div className="w-auto h-auto ml-2 flex flex-row items-center justify-center group hover:cursor-pointer">
                <Field
                  width="1.5rem"
                  fill="none"
                  stroke="#A9A9A9"
                  className="group-hover:stroke-gray-500 duration-300 transition-colors"
                />
                <p className="text-gray text-lg ml-1 duration-300 transition-colors group-hover:text-gray-500">종류</p>
              </div>
            </div>
            <button className="w-[5.5rem] h-[2rem] mb-2 bg-blue rounded-lg text-white text-lg flex items-center justify-between px-2 hover:bg-blue-600 transition-colors duration-300 hover:cursor-pointer">
              <Change />
              바꾸기
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
