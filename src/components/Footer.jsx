import Image from "next/image";
import logo from "@/assets/icon.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] py-5">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="logo" className="w-20 h-24" />
          <h4 className="text-2xl md:text-5xl text-darkGray">ook Sphere</h4>
        </div>
        {/* <div>
          <ul className="text-xs md:text-xl flex flex-wrap justify-center items-center">
            <li className="cursor-pointer">Home</li>
          </ul>
        </div> */}
        <div className="">
          <ul className="flex gap-5 justify-center items-center mt-2">
            <FaFacebook className="w-5 md:w-8 h-5 md:h-8 cursor-pointer hover:text-gray-500 hover:text-gray-500" />
            <FaTwitter className="w-5 md:w-8 h-5 md:h-8 cursor-pointer hover:text-gray-500" />
            <FaInstagram className="w-5 md:w-8 h-5 md:h-8 cursor-pointer hover:text-gray-500" />
            <FaLinkedin className="w-5 md:w-8 h-5 md:h-8 cursor-pointer hover:text-gray-500" />
          </ul>
        </div>
      </div>
      <div className="bg-gray-600 text-white flex justify-center items-center">
        <p className="text-xs md:text-xl py-1.5 md:py-5">
          © 2023 <span className=" text-orange font-bold">Book Sphere</span> All
          Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
