import react, { useState } from "react";

function handleclick() {
    fetch("https://anurag-vns.github.io/jsonfile/champaksir/manager.json")
        .then(response => response.json())
        .then(result => {
            console.log('response', result);
        })
        .catch(error => {
            console.log('error', error);
        });
}

function Company() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1>Records of Company:{data}</h1>
            <button onClick={handleclick}>Show Record</button>
            <ul>
                {
data.map(post=>{
    return(
        <>
        <li>{post.id}</li>
          <li>{post.name}</li>
        </>
    )
})
                }
            </ul>
        </div>
    );
}
export default Company;