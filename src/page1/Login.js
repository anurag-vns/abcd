import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate;

    const fakeAuth=(email,password)=>{
return email==="user@example.com" && password==="1234";
    };

    const handleLogin = (e) => {
    e.preventDefault();
    if (fakeAuth(email, password)) {
      localStorage.setItem("token", "mock-jwt-token");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };


    return(
        <form onSubmit={handleLogin}>
            <h2>wlecome Login page</h2>
            <input type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} required/><br/>
            <input type="pasword" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} required/><br/>
            <button type="submit">Login</button>

        </form>

    );
    
}