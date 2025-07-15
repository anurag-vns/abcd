import react, { useEffect, useState } from "react";

function Ckt() {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch("https://anurag-vns.github.io/jsonfile/cricket.json")
            .then((response) => {
                response.json().then((result) => {
                    setTeam(result);
                    console.log(result);
                })
            });
    })



    return (
        <div>
            
                {
                    team.map(pst => {
                        return (
                            <>
                                <li>{pst.team1}</li>
                                <li>{pst.team2}</li>
                            </>
                        )
                    })
                }
            
        </div>
    );
}
export default Ckt;