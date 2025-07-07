import react, { useEffect, useState } from "react";

function FetchApi() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                response.json().then((result) => {
                    setPost(result);
                })
            })
    });



    return (
        <div>
            <ul>
                {
                    post.map(pst => {
                        return (
                            <>
                                <li>{pst.id}</li>
                                <li>{pst.title}</li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default FetchApi;