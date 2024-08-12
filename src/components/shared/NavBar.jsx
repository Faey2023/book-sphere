import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icon.png";

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between px-2 md:px-10">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="logo" className="w-10 h-12" />
        <h4 className="md:text-2xl">ook Sphere</h4>
      </div>

      {/* Navbar Navigation Links */}
      <nav className="flex flex-row gap-3 text-center text-sm md:text-base p-3">
        <Link
          href="/"
          className="hover:text-rose-800 hover:font-semibold hover:underline p-2"
        >
          Home
        </Link>
        <Link
          href="/books"
          className="hover:text-rose-800 hover:font-semibold hover:underline p-2"
        >
          Books
        </Link>
        <Link
          href="/addBook"
          className="hover:text-rose-800 hover:font-semibold hover:underline p-2"
        >
          Add New Book
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
