import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Patna from "./Patna";

export default function Bihar() {
    return (
        <>
            <h1>Welcome to Bihar</h1>
            <nav>
<Link to="/patna">Patna</Link>
            </nav>

            <Routes>
                <Route path="/patna" element={<Patna/>}/>
            </Routes>
        </>

    );
}