import React from "react";
import Hero from "./Hero";
import mario from "../assets/mario.jpg";
import pokemon from "../assets/pokemon.jpg";
import iphone from "../assets/iphone.jpg";
import Card from "./Card";
import gta from "../assets/gta.jpg";
import { Link } from "react-router-dom";

const cards = [
    {
        img: gta,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: pokemon,
        name: "Pokemon",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: mario,
        name: "Mario",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
    {
        img: iphone,
        name: "Apple",
        des: "The offcial Apple sever. Your Place to talk about our latest tech!",
        online: "32,450",
        members: "80,000",
    },
];

const MainContent = () => {
    return (
        <div className="bg-[#36393F] w-full h-full p-4 sm:6 md:8">
            {/* Hero */}
            <Hero />
            {/* Title */}
            <h2 className="text-white font-bold text-[20px] py-5">
                Featured communities
            </h2>
            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xll:grid-cols-5 gap-3">
                {cards.map((card, i) => {
                    return (
                        <Link to="/card">
                            <Card
                                key={i}
                                img={card.img}
                                name={card.name}
                                des={card.des}
                                online={card.online}
                                members={card.members}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MainContent;
