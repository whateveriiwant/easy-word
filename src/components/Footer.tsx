import Velog from "../assets/footer/velog.svg?react";
import Github from "../assets/footer/github.svg?react";
import LinkedIn from "../assets/footer/linkedin.svg?react";

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center pb-12">
      <p className="text-lg text-gray font-extralight">Made by Seungjun Jeong</p>
      <a href="https://velog.io/@jsj9620" target="_blank" rel="noopener noreferrer">
        <Velog
          fill="#A9A9A9"
          className="transition-colors duration-200 ease-in-out hover:cursor-pointer hover:fill-[#20C997] ml-2"
        />
      </a>
      <a href="https://github.com/whateveriiwant" target="_blank" rel="noopener noreferrer">
        <Github
          fill="#A9A9A9"
          className="transition-colors duration-200 ease-in-out hover:cursor-pointer hover:fill-[#24292E] ml-2"
        />
      </a>
      <a href="https://www.linkedin.com/in/seungjun-dev/" target="_blank" rel="noopener noreferrer">
        <LinkedIn
          fill="#A9A9A9"
          className="transition-colors duration-200 ease-in-out hover:cursor-pointer hover:fill-[#0077B5] ml-2"
        />
      </a>
    </div>
  );
};
