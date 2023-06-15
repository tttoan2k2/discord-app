import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import avatar from "../assets/avatar.jpg";

const Profile = () => {
    return (
        <div>
            <div className="flex items-center justify-between bg-[#292B2F] p-3">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt=""
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 p-1 bg-[#3BA55D] rounded-full border-[3px] border-[#292B2F]"></div>
                    </div>
                    <div className="text-white leading-4">
                        <h3 className="font-semibold text-[18px]">Toan</h3>
                        <p className="text-white/60 text-[13px]">#0001</p>
                    </div>
                </div>
                <div className="flex items-center justify-center text-white gap-3">
                    <FaMicrophone className="hover:text-white/80 cursor-pointer" />
                    <MdHeadphones className="hover:text-white/80 cursor-pointer" />
                    <IoMdSettings className="hover:text-white/80 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
