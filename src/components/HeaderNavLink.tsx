"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className: string;
};

const HeaderNavLink = ({ children, href, className }: Props) => {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <Link
      href={href}
      className={`${className} ${
        active ? "text-[white] font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};
export default HeaderNavLink;
