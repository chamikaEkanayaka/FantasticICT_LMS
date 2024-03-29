import React from "react";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Study from "./pages/Study";
import StudyAl from "./pages/StudyAl";

function App(){
  const router=createBrowserRouter(
    createRoutesFromElements( 
      <>
        <Route path="/" element={<Root/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/study" element={<Study/>}/>
          <Route path="/studyal" element={<StudyAl/>}/>
        </Route>
      </>  
    )
  )
  
  return(
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

const Root=()=>{
  return(
      <>
      {/* <NavBar/> */}
      <div><Outlet/></div>
      </>
  )
}

export default App;