"use client";

import { useState } from "react";
import { arrowRight } from "../icons/footerIcons";

type Props = {};
const Footer = (props: Props) => {
  const [email, setEmail] = useState("");
  const handleEditEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <footer className="flex w-full h-[395px] justify-center items-center bg-bgLightColor dark:bg-bgDarkColor">
      <div className="w-full inline-flex flex-col items-start gap-[93px] pt-[68px] px-[124px] pb-[51px]">
        <div className="flex items-center gap-[278px]">
          <div className="flex flex-col items-start gap-[43px]">
            <div className="text-textLightMode dark:text-gold uppercase text-center font-ubuntu text-4xl not-italic">
              <span className="font-bold">uni</span>
              <span className="font-light">cat</span>
            </div>
            <form className="flex flex-col items-start gap-[17px]">
              <label className="text-secondary1800 dark:text-secondary1500 text-center font-zilla text-lg not-italic font-bold ">
                Subscribe
              </label>
              <div className="flex flex-row">
                <input
                  type="text"
                  value={email}
                  onChange={handleEditEmail}
                  placeholder="E-mail"
                  className="flex w-[243px] p-[10px] items-start gap-[10px] placeholder:text-monochrome400 placeholder:dark:text-monochrome100 text-monochrome400 dark:text-monochrome100 placeholder:font-zilla font-zilla placeholder:text-sm text-sm placeholder:not-italic not-italic placeholder:font-normal font-semibold bg-primaryLightMode dark:bg-monochrome400 placeholder:opacity-70"
                />
                <button
                  className="flex w-[47px] h-10 px-[13px] py-5 items-center justify-center text-secondary1100 dark:text-secondary1200 gap-[10px] bg-secondary1600 dark:bg-monochrome600"
                  type="submit"
                >
                  {arrowRight}
                </button>
              </div>
            </form>
          </div>
          <div className=""></div>
        </div>
        <span className="w-full h-[1px] bg-secondary800 dark:bg-monochrome400"></span>
      </div>
    </footer>
  );
};
export default Footer;
