import react, { useEffect, useState } from "react";

function FetchApi() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch("https://anurag-vns.github.io/jsonfile/cricket.json")
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