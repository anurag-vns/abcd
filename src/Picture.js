import react, { useEffect, useState } from "react";


function Picture() {
    const [act, setAct] = useState([]);

    useEffect(() => {
        fetch("https://anurag-vns.github.io/jsonfile/champaksir/abc.json")
            .then((response) => {
                response.json().then((result) => {
                    setAct(result);
                    console.log(result);

                })
            })
    });
    return (
        <div>
            <h1>hello</h1>
            <h1>{act.id}</h1>
            <h1>{act.name}</h1>
        </div>
    );
}
export default Picture;