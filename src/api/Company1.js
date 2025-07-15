import React, { useEffect, useState } from "react";

function Company1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error('Error data:', error));
    }, []);


    return (
        <div>
            <h1>Data is Here</h1>
            <ul>
                {
                    data.map((item) => (
                        <>
                            <li>{item.id}</li>
                            <li>{item.name}</li>
                            <li>{item.email}</li>
                            <li>{item.username}</li>
                            <li>{item.website}</li>

                        </>
                    ))
                }
            </ul>
        </div>

    );
}
export default Company1;