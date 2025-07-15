import react, { useState } from "react";

function Cricket() {
    const [data, setData] = useState("ram");
    function handleclick() {
        fetch("https://anurag-vns.github.io/jsonfile/champaksir/batsman.json")
            .then(response => response.json())
            .then(data => {
                console.log('Response', data);
            })

            .catch(error => {
                console.error('error:', error);
            });
        }
        return (
            <div>
                <h1>Hello</h1>
                <h1>{data}</h1>
                <button onClick={handleclick}>click</button>
            </div>
        );
    }
    export default Cricket;