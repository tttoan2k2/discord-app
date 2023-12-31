import React from "react";

const DiscoverCard = ({ icon, name }) => {
    return (
        <div>
            <div className="flex text-white/50 items-center text-[17px]   ">
                <button className="flex items-center hover:bg-[#7289dc] hover:text-white focus:bg-[#7289dc] focus:text-white  w-full py-2.5 rounded-[0.4rem] duration-100 ease-out ">
                    <div className="pl-2 text-[25px]">{icon}</div>
                    <p className="ml-3">{name}</p>
                </button>
            </div>
        </div>
    );
};

export default DiscoverCard;
