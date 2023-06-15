import React from "react";
import dc from "../assets/dc.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { Link } from "react-router-dom";

const servers = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

const Severs = () => {
    return (
        <div className="bg-[#202225] w-[70px] h-screen sticky top-0">
            <div className="flex flex-col space-y-2 p-3">
                <Link to="/">
                    <div className="bg-[#36393F] rounded-full hover:scale-110 duration-200 cursor-pointer">
                        <img src={dc} alt="" className="" />
                    </div>
                </Link>
                <div className="border-t-[2px] border-[#36393F] pb-3"></div>
                {servers.map((server, i) => {
                    return (
                        <div
                            className="hover:scale-110 duration-200 cursor-pointer"
                            key={i}
                        >
                            <img
                                src={server.img}
                                alt=""
                                className="rounded-full"
                            />
                        </div>
                    );
                })}
                <div className="relative grid grid-cols-2 p-2 gap-1 bg-[#3F4681] rounded-[15px] hover:scale-110 duration-200 cursor-pointer">
                    <img src={img1} alt="" className="rounded-full" />
                    <img src={img1} alt="" className="rounded-full" />
                    <img src={img1} alt="" className="rounded-full" />
                    <img src={img1} alt="" className="rounded-full" />
                </div>
                <div className="bg-[#36393F] rounded-full p-3 flex items-center justify-center hover:scale-110 duration-200 cursor-pointer">
                    <AiOutlinePlus className="text-[#3BA55D] text-[25px]" />
                </div>

                <div className="bg-[#3BA55D] rounded-[15px] p-3 flex items-center justify-center hover:scale-110 duration-200 cursor-pointer">
                    <FaCompass className="text-[white] text-[25px]" />
                </div>
            </div>
        </div>
    );
};

export default Severs;
