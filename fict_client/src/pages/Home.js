import React from "react";
import NavBar from "../components/common/NavBar";
import HomeSec1 from "../components/home/HomeSec1";
import HomeSec2 from "../components/home/HomeSec2";

function Home(){
    return(
        <>
            <NavBar/>
            <HomeSec1/>
            <HomeSec2/>
        </>
    );
}

export default Home;