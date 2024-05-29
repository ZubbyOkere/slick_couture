"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaAppStore, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import CartModal from "./CartModal";

type Props = {};

const NavIcons = (props: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);

  const router = useRouter();

  const user = true;

  const handleProfile = () => {
    if (!user) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  const handleCart = () => {
    setCartOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center gap-4 relative xl:gap-6">
      <CgProfile onClick={handleProfile} className="cursor-pointer" size={25} />
      {isProfileOpen && (
        <div className="absolute top-8 -left-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 z-20">
          <Link href={"/"}>profile</Link>
          <p className="cursosr-pointer">logout</p>
        </div>
      )}
      <IoIosNotifications className="cursor-pointer" size={25} />

      <div className="relative cursor-pointer">
        <FaShoppingCart
          className="cursor-pointer"
          onClick={handleCart}
          size={25}
        />
        <div className="absolute bg-red-600 -top-4 -right-4 rounded-full h-6 w-6 text-center text-white ">
          2
        </div>
      </div>
      {cartOpen && (
        <div className="relative">
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
