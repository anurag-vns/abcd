import React from "react";
import { Link } from "react-router-dom";



export default function Home(){
    return(
<div>
    <h1>welcome Home page</h1>
    <Link to="/login">Login</Link> |  <Link to="/dashborad">Dashboard</Link>
   
</div>
    );
}