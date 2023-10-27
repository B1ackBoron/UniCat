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
              <input
                type="text"
                value={email}
                onChange={handleEditEmail}
                placeholder="E-mail"
              />
              <button type="submit">{arrowRight}</button>
            </form>
          </div>
          <div className=""></div>
        </div>
        <span className="w-full h-[1px] bg-secondary800 dark:bg-secondary400"></span>
      </div>
    </footer>
  );
};
export default Footer;
