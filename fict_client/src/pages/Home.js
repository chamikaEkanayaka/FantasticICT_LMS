import React from "react";
import NavBar from "../components/common/NavBar";
import WelcomeSec from "../components/home/WelcomeSec";
import HomeSec1 from "../components/home/HomeSec1";
import HomeSec2 from "../components/home/HomeSec2";
import HomeSec3 from "../components/home/HomeSec3";
import FooterBar from "../components/common/FooterBar";

function Home(){
    return(
        <>
            <NavBar/>
            <WelcomeSec/>
            <HomeSec1/>
            <HomeSec2/>
            <HomeSec3/>
            <FooterBar/>
        </>
    );
}

export default Home;