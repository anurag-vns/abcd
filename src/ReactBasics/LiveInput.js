import { useState } from "react";

function LiveInput() {
    const [text, setText] = useState('');
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placehonder="Type something"/>
           
            <p>You typed:{text}</p>
        </div>
    );


}
export default LiveInput;