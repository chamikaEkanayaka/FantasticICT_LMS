import React from "react";
import NavBar from "../components/common/NavBar";
import WelcomeSec from "../components/home/WelcomeSec";
import HomeSec1 from "../components/home/HomeSec1";
import HomeSec2 from "../components/home/HomeSec2";
import {motion} from "framer-motion";

function Home(){
    return(
        <>
            <NavBar/>
            <WelcomeSec/>
            <HomeSec1/>
            <HomeSec2/>
            <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            />
        </>
    );
}

export default Home;