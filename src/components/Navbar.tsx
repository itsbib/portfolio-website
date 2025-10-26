"use client";

import { CircleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type INavLink = {
  title: string;
  href: string;
};

const NavLinks: INavLink[] = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Creations", href: "/creations" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex gap-10  my-4 mb-6 justify-self-end">
      {NavLinks.map((navLink) => (
        <Link
          key={navLink.title}
          href={navLink.href}
          className="flex items-center"
        >
          {pathname === navLink.href ||
          (navLink.href !== "/" && pathname === navLink.href) ? (
            <CircleIcon size={6} weight="fill" />
          ) : (
            <p>{navLink.title}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
