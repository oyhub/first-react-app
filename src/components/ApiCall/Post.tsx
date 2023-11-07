import { Entry } from './PostApiCall';

function Post(props: { entry: Entry }) {
    return(
        <div>
            <h3>{props.entry.title}</h3>
            <p>{props.entry.description}</p>
            <p>{props.entry.price}</p>
        </div>
    )
}

export default Post;