import React from "react";
import NavBar from "../components/common/NavBar";
import GceAlStudy from "../components/study/GceAlStudy";
import GceOlStudy from "../components/study/GceOlStudy";

function Study(){
    return(
        <>
            <NavBar/>
            <GceAlStudy/>
            <GceOlStudy/>
        </>
    )
}

export default Study;