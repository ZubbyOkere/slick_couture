import React from "react";

import Menu from "./MobileMenu";
import Link from "next/link";
import { GiHamburger } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

type Props = {};

const links = [
  { name: "Homepage", href: "/" },
  { name: "Shop", href: "/list" },
  { name: "Deals", href: "/" },
  { name: "Contact", href: "/" },
  { name: "Logout", href: "/" },
  { name: "Cart(1)", href: "/" },
];

const Navbar = (props: Props) => {
  return (
    <div className="h-20 px-4 md:px-6 lg:px-12 xl:px-32 2xl:px-64 flex justify-between items-center relative ">
      {/* mobile screem */}
      <div className="flex items-center justify-between h-full md:hidden sticky">
        <Link href={"/"}>
          <h2>Slick Store</h2>
        </Link>

        <Menu />
      </div>
      {/* big screens */}
      <div className="hidden md:flex justify-between items-center fixed z-20 ">
        <div className="w-1/3 text-red-700 xl:w-1/2 items-center gap-8 flex">
          <Link href={"/"}>Slick Store</Link>
          <div className="hidden xl:flex gap-4">
            {links.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-2/3 flex justify-between items-center gap-8 xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
