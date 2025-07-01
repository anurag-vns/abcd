import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Varanasi from "./Varanasi";


export default function Up() {
    return (
        <div>
            <h1>Welcome to Uttar Pradesh</h1>
            <nav>
                <Link to="/varanasi" >Varanasi</Link>|
            </nav>
            <Routes>
                <Route path="/varanasi" element={<Varanasi/>} />
            </Routes>

        </div>

    );
}