import React from "react";
import Severs from "./Severs";
import Discover from "./Discover";

const CardPage = () => {
    return (
        <div className="flex bg-[#36393F]">
            <Severs />
            <Discover />
        </div>
    );
};

export default CardPage;
