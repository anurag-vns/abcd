import { useState,useEffect } from "react";


function StarWarsCharacter(){
    const[character,setcharacter]=useState(null);

    useEffect(()=>{
        fetch('https://api.weather.com')
        .then(response=>response.json())
        .then(data=>setcharacter(data));
    },[]);

    return(
        <div>
            <h2>Star Wars Character</h2>
            {character?(
                <div>

                    <p><strong>Name:</strong>{character.name}</p>
                    <p><strong>Height:</strong>{character.height}cm</p>
                    <p><strong>Mass:</strong>{character.mass}kg</p>
                </div>
            ):(
                <p>Loading....</p>
            ) }

        </div>
    );
}
export default StarWarsCharacter;