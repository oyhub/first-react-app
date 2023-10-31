import { useEffect, useState } from 'react';

function ExampleUseEffect() {
        useEffect(() => {
            const timerId = setInterval(() => {
                console.log('Timer is running');
            }, 1000);

            return () => {
                clearInterval(timerId)
            };
        })

    return <div>Example is showing</div>
}

function UseEffect() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showExample, setShowExample] = useState(true);

    function onButtonClick() {
        setShowExample(false);
    }

    function onButtonToggle() {
        showExample ? setShowExample(false) : setShowExample(true);
    }

    return (
        <div>
            <h2 style={{ marginBottom: '0'}}>UseEffect</h2>
            <button onClick={onButtonClick}>Remove example</button>
            <button onClick={onButtonToggle}>Toggle example</button>
            { showExample ? <ExampleUseEffect/> : null }
        </div>
    )
}

export default UseEffect;