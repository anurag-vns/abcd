import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import User1 from "./user1";
import Profile1 from "./Profile1";

function Dashboard1() {
    return (
        <div>
            <h2>wlecome Dashboard1</h2>
            <nav>
                <Link to="/user">User1</Link> |
                <Link to="/profile">Profile1</Link> |
            </nav>
            <Routes>
                <Route path="./user" element={<User1/>}/>
                <Route path="./profile" element={<Profile1/>}/>
            </Routes>
            <Outlet/>
        </div>
    );
}
export default Dashboard1;