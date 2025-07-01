import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Up from "./Up";
import Bihar from "./Bihar";

function Dashboard(){
    return(
    <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/up">Up</Link>
                <Link to="/bihar">Bihar</Link>
                
            </nav>

            <Routes>
                <Route path="/up" element={<Up/>}/>
                <Route path="/bihar" element={<Bihar/>}/>
            </Routes>
    </div>
    );

}
export default Dashboard;