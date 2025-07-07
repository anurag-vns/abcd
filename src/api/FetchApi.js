import react, { useEffect } from "react";

function FetchApi() {
   useEffect(()=>{
 fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            response.json().then((result) => {
                console.log(result);
            })
        })
   });



    return (
        <div>
            <h1>Fetch Api</h1>
        </div>
    )
}
export default FetchApi;