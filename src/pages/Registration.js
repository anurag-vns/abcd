import React from "react";

function Registration() {
    return (
        <div>
            <center>

                <nav>
                    <ul>
                        <h1>Registration Here:</h1>
                        <label>Enter Name :{"   "}</label>
                        <input type="text" placeholder="Enter Name" /><br />

                        <label>Enter User Name :{"   "}</label>
                        <input type="text" placeholder="User Name" /><br />

                        <label>Password :{"   "}</label>
                        <input type="password" placeholder="Password" /><br />

                        <button type="button">Submit</button>
                    </ul>
                </nav>

            </center>
        </div>
    );
}

export default Registration;