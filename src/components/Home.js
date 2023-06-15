import React from "react";
import Severs from "./Severs";
import Discover from "./Discover";
import MainContent from "./MainContent";

const Home = () => {
    return (
        <div className="flex">
            {/* list severs */}
            <Severs />
            {/* list channels/Discover */}
            <Discover />
            {/* main */}
            <MainContent />
        </div>
    );
};

export default Home;
