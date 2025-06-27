import React from "react";

function Login() {
    return (

        <div>
            <center>
            <h1>Login Here</h1>
            <ul>
                <nav>
                    <input type="text"  placeholder="Enter user name" /><br/>
                    <input type="password" placeholder="Password" /><br/><br/>
                    <button type="submit">Login</button>
                </nav>
            </ul>
            </center>
        </div>
    );

}
export default Login;