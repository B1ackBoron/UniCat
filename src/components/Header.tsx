"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dropDownIcon, sunIcon } from "../icons/headerIcons";
import AboutUs from "./AboutUs";
import HeaderNavLink from "./HeaderNavLink";

type Props = {};
const Header = (props: Props) => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const openAboutUs = () => {
    setIsAboutUsOpen(true);
  };

  const closeAboutUs = () => {
    setIsAboutUsOpen(false);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <header className="h-[98px] bg-bgLightColor dark:bg-bgDarkColor w-auto">
        <nav>
          <div className="pt-[29px] pr-[50px] pb-[28px] pl-[61px] gap-[47px] flex justify-center">
            <ul className="flex items-center gap-[50px]">
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/quiz"
                >
                  Quiz “perfect match”
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/catalog"
                >
                  Catalog
                </HeaderNavLink>
              </li>
              <li className="text-textLightMode dark:text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
                <button
                  className="uppercase flex flex-row"
                  onMouseEnter={openAboutUs}
                >
                  About Us
                  <span className="w-6 h-6 pl-[2px]">{dropDownIcon}</span>
                </button>
              </li>
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/blog"
                >
                  blog
                </HeaderNavLink>
              </li>
            </ul>
            <Link href="/">
              <span className="text-textLightMode dark:text-[white] text-center text-4xl not-italic font-bold font-ubuntu leading-[normal] uppercase">
                UNI
              </span>
              <span className="text-textLightMode dark:text-[white] text-center text-4xl not-italic font-light font-ubuntu leading-[normal] uppercase">
                CAT
              </span>
            </Link>
            <ul className="flex items-center gap-[50px]">
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/shipping"
                >
                  shipping and payment
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/plan"
                >
                  plan a kitten
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  className="text-textLightMode dark:text-[white]  uppercase text-center font-zilla text-base not-italic font-normal"
                  href="/contacts"
                >
                  contacts
                </HeaderNavLink>
              </li>
              <li className="text-textLightMode dark:text-[white] text-center">
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {sunIcon}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isAboutUsOpen && (
        <div onMouseLeave={closeAboutUs}>
          <AboutUs />
        </div>
      )}
    </>
  );
};
export default Header;
