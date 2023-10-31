function Person(props: { firstName: string; lastName: string; city: string ; }) {
    return (
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>{props.city}</p>
        </div>
    )
}

export default Person;