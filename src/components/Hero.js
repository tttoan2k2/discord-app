import React from "react";
import hero from "../assets/hero2.webp";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
    return (
        <div className=" relative h-[280px] md:h-[320px]">
            <div className="w-full">
                <img
                    src={hero}
                    alt=""
                    className="w-full h-[280px]  md:h-[320px] object-cover rounded-[10px]"
                />
            </div>

            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-5">
                <div className=" text-center">
                    <h2 className="text-white font-bold text-[20px] md:text-[24px]">
                        Find your community on Discord
                    </h2>
                    <p className="text-white text-[15px]">
                        From gaming, to music, to learning, there's a place for
                        you.
                    </p>
                </div>
                <div className="flex items-center relative">
                    <input
                        type="search"
                        placeholder="Explore communities"
                        className="outline-0 px-3 py-2 w-[20rem] md:w-[25rem] lg:w-[35rem] rounded-[5px]"
                    />
                    <FiSearch className="absolute right-3" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
