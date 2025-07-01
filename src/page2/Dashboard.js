import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Up from "./Up";
import Bihar from "./Bihar";
import Varanasi from "./Varanasi";

export default  function Dashboard(){
    return(
        <div>
             <h2> Welcome to Dashboard</h2>
             <nav>
                <Link to="/up">UttarPradesh</Link>|
                   <Link to="/bihar">Bihar</Link>
             </nav>

        <Routes>
            <Route path="/up" element={<Up/>}/>
              <Route path="/bihar" element={<Bihar/>}/>
               <Route path="/varanasi" element={<Varanasi/>}/>

        </Routes>
        <Outlet/>
        </div>
       
    );
}