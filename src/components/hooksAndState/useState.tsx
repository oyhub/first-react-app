import { useState } from 'react';

function UseState() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActive, setIsActive] = useState(false);

    function handleState() {
        isActive ? setIsActive(false) : setIsActive(true)
    }

    return (
        <div>
            <h2 style={{ marginBottom: '0'}}>UseState</h2>
            <button onClick={handleState}>Toggle active state</button>
            {isActive ?
            <div>I am active</div> :
            <div>I am not active</div>
            }
        </div>
    )
}

export default UseState;