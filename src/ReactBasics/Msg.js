import { useState } from "react";

function Msg() {
    const [message, setMessage] = useState("Welcome Dear");
    function handleclick() {
        setMessage("Thanks for clicking")
    };
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleclick}>click</button>
        </div>

    );
}
export default Msg;