function buttonClick() {
    console.log("Button has been clicked");
}

function Greeting() {
    return (
        <>
            <p>Hello, user</p>
            <button onClick={buttonClick}>Click me</button>
    </>)
}

export default Greeting;