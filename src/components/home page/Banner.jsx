import bannerImg from "@/assets/banner.jpg";
import "./banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="md:relative md:min-h-[70vh] overflow-hidden text-white"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)" }}
    >
      <div
        className="absolute inset-0 zoom-bg"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 min-h-80 flex flex-col space-y-2 p-10 md:p-24">
        <h1 className="font-satisfy text-xl md:text-5xl font-medium capitalize zoom-text">
          Welcome to <br />
          Book Sphere
        </h1>
        <p className="text-xs md:text-base md:w-1/2 font-medium zoom-text italic">
          Whether you&#39;re seeking heart-pounding adventures, soul-stirring
          romances, or mind-bending mysteries, our collection has something for
          every reader. Explore new worlds, meet unforgettable characters, and
          lose yourself in stories that will stay with you long after the final
          page. Your next literary adventure awaits—start reading today and let
          your imagination soar!
        </p>
      </div>
    </div>
  );
};

export default Banner;
