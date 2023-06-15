import React from "react";

const Card = ({ img, name, des, online, members }) => {
    return (
        <div className="bg-[#292B2F] max-w-[296px] h-[313px] rounded-[10px] hover:scale-105 duration-300 cursor-pointer">
            <div className="">
                <img
                    src={img}
                    alt=""
                    className="w-[296px] h-[143px] rounded-t-[10px] object-cover"
                />
            </div>
            <div className="p-3 ">
                <h2 className="text-white font-bold pb-2">{name}</h2>
                <p className="text-[14px] text-[#B9BBBE] leading-tight">
                    {des}
                </p>
            </div>
            <div className="px-3 pt-9 md:pt-9 flex justify-between">
                <div className="flex items-center gap-x-[0.1rem]">
                    <div className="bg-[#3BA55D] w-[5px] h-[5px] rounded-[100%]"></div>
                    <p className="text-[10.5px] sm:text-[12px] text-[#B9BBBE] min-w-[80px]">
                        {online} Online
                    </p>
                </div>
                <div className="flex items-center gap-x-[0.1rem]">
                    <div className="bg-[#B9BBBE] w-[5px] h-[5px] rounded-[100%]"></div>
                    <p className="text-[10.5px] sm:text-[12px] text-[#B9BBBE] min-w-[80px]">
                        {members} Members
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
