import { useState } from "react";

function ToggleMessage() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}Message
            </button>
            {show && <p>I'am visibile now!</p>}
        </div>
    );
}
export default ToggleMessage;