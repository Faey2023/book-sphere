import { GrAppsRounded } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import { TbFileDescription } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const NavBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 bg-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 w-48 lg:relative lg:top-auto lg:right-auto lg:h-auto`}
    >
      <nav className="flex flex-col gap-3 text-center py-5 h-screen">
        <Image src={logo} alt="logo" className="mb-5" />

        {/* navbar navigation links */}
        <Link
          href="/"
          className="text-base hover:bg-sky-200 text-gray-700 hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <GrAppsRounded />
          Home
        </Link>
        <Link
          href="/listing"
          className="text-base hover:bg-sky-200 text-gray-700 hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <IoIosAddCircle />
          Add New Book
        </Link>
        <Link
          href="/about"
          className="text-base hover:bg-sky-200 text-gray-700 hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <TbFileDescription />
          About
        </Link>
        <Link
          href="/favorites"
          className="text-base hover:bg-sky-200 text-gray-700 hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <CiHeart />
          Favorites
        </Link>
        <hr className="text-gray-700" />

        <Link
          href="/settings"
          className="text-base hover:bg-sky-200 text-gray-700 hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <LuSettings />
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
