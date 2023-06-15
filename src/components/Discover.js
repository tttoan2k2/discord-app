import React from "react";
import DiscoverCard from "./DiscoverCard";
import { FaCompass } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiRadioFill } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import Profile from "./Profile";

const discovers = [
    { icon: <FaCompass />, name: "Home" },
    { icon: <IoGameController />, name: "Gaming" },
    { icon: <IoMusicalNotesSharp />, name: "Music" },
    { icon: <FaGraduationCap />, name: "Education" },
    { icon: <FaReact />, name: "Science & Tech" },
    { icon: <RiRadioFill />, name: "Entertainment" },
    { icon: <BiGitRepoForked />, name: "Student Hubs" },
];

const Discover = () => {
    return (
        <div className="hidden md:flex flex-col justify-between bg-[#2F3136] min-w-[240px] h-screen sticky top-0">
            <div className=" p-3">
                <h1 className="text-white text-[30px] font-bold pb-8">
                    Discover
                </h1>
                {discovers.map((discover, i) => {
                    return (
                        <DiscoverCard
                            key={i}
                            icon={discover.icon}
                            name={discover.name}
                        />
                    );
                })}
            </div>
            <Profile />
        </div>
    );
};

export default Discover;
