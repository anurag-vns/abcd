import React from "react";

function ExampleA(){
    const names=['Abhay','Sachin','Rahul','Mahesh'];
    return(
        <>
        <h1></h1>
        <ul>
{names.map((name,index)=>(
    <li key={index}>{name}</li>

))}
        </ul>
        </>
    );
}
export default ExampleA;