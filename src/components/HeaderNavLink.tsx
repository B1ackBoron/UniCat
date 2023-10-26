"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const HeaderNavLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <Link
      href={href}
      className={`hover: text-[white] ${
        active ? "text-[white] font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};
export default HeaderNavLink;
