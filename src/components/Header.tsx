import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="h-[98px] bg-bgColor w-auto">
      <nav>
        <div className="pt-[29px] pr-[50px] pb-[28px] pl-[61px] gap-[47px] flex justify-center">
          <ul className="flex items-center gap-[50px]">
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/quiz">Quiz “perfect match”</HeaderNavLink>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/catalog">Catalog</HeaderNavLink>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <button className="uppercase">About Us</button>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/blog">blog</HeaderNavLink>
            </li>
          </ul>
          <Link href="/">
            <span className="text-[white] text-center text-4xl not-italic font-bold font-ubuntu leading-[normal] uppercase">
              UNI
            </span>
            <span className="text-[white] text-center text-4xl not-italic font-light font-ubuntu leading-[normal] uppercase">
              CAT
            </span>
          </Link>
          <ul className="flex items-center gap-[50px]">
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/shipping">
                shipping and payment
              </HeaderNavLink>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/plan">plan a kitten</HeaderNavLink>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              <HeaderNavLink href="/contacts">contacts</HeaderNavLink>
            </li>
            <li className="text-[white] uppercase text-center font-zilla text-base not-italic font-normal">
              icon
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
