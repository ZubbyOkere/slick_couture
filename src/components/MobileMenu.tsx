"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const links = [
  { name: "Homepage", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Deals", href: "/" },
  { name: "Contact", href: "/" },
  { name: "Logout", href: "/" },
  { name: "Cart(1)", href: "/" },
];

const Menu = (props: Props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-between items-center">
      {menu && (
        <div className="flex flex-col w-full bg-black absolute top-20 right-0 left-0 h-[calc(100vh-80px)] text-white items-center gap-10 text-xl py-10">
          {links.map((link) => (
            <Link href={link.href}>{link.name}</Link>
          ))}
        </div>
      )}
      <div className="absolute right-4 top-6">
        <GiHamburgerMenu size={25} onClick={() => setMenu(!menu)} />
      </div>
    </div>
  );
};

//

export default Menu;
