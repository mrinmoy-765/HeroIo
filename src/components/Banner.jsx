import { Link } from "react-router-dom";
import GP from "../assets/GooglePlay.png";
import AP from "../assets/AppStore.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className="text-center bg-gray-50 px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold pt-8 sm:pt-12 pb-3 sm:pb-4">
          We Build <br />{" "}
          <span className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </p>
        <span className="text-sm sm:text-md text-gray-600 pb-4 sm:pb-6 block">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 sm:mt-6">
          <Link
            to="https://play.google.com/store/games"
            className="flex items-center justify-center gap-1.5 bg-transparent border border-gray-500 rounded-sm px-4 sm:px-6 py-1.5 font-medium w-full sm:w-auto"
          >
            <img src={GP} alt="" />
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="flex items-center justify-center gap-1.5 bg-transparent border border-gray-500 rounded-sm px-4 sm:px-6 py-1.5 font-medium w-full sm:w-auto"
          >
            <img src={AP} alt="" />
            App Store
          </Link>
        </div>
        <img
          src={hero}
          alt=""
          className="w-full h-40 sm:h-60 md:h-[60vh] object-contain mt-6 sm:mt-10"
        />
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-6 sm:py-10">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white text-center px-4">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-15 mt-6 sm:mt-7 px-4">
            <div className="space-y-1.5">
              <p className="text-gray-300 text-xs sm:text-sm">
                Total Downloads
              </p>
              <p className="text-white font-bold text-2xl sm:text-3xl">29.6M</p>
              <p className="text-gray-300 text-xs sm:text-sm">
                21% more than last month
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-gray-300 text-xs sm:text-sm">Total Reviews</p>
              <p className="text-white font-bold text-2xl sm:text-3xl">906K</p>
              <p className="text-gray-300 text-xs sm:text-sm">
                46% more than last month
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-gray-300 text-xs sm:text-sm">Active Apps</p>
              <p className="text-white font-bold text-2xl sm:text-3xl">132+</p>
              <p className="text-gray-300 text-xs sm:text-sm">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
