import { Entry } from './PostApiCall';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post(props: { entry: Entry }) {
    return(
        <div>
            <h3>{props.entry.title}</h3>
            <p>{props.entry.description}</p>
            <p>{props.entry.price}</p>
            <p>{props.entry.id}</p>
        </div>
    )
}

export default Post;

interface Post {
    id: number;
    title: string;
    body: string;
}

export function SinglePost() {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";

    const [post, setPost] = useState<Post>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null >(null);
    let { id } = useParams();

    useEffect(() => {
            async function getData(url: string) {
                try {
                    setIsError(null);
                    setIsLoading(true);

                    const response = await fetch(url);
                    const result = await response.json();

                    if (response.ok) {
                        setPost(result);
                    } else {
                        setIsError('Could not get data');
                    }

                } catch (error) {
                    setIsLoading(false);
                    setIsError('Upps, something went wrong.. Try again');
                } finally {
                    setIsLoading(false);
                }
            }
            getData(baseUrl + '/' + id);
        }, [id]
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{ isError }</div>;
    }

    console.log(post);
    return (
        <div>
            <p>id: {post?.id}</p>
            <p>Title: {post?.title}</p>
            <p>Body: {post?.body}</p>
        </div>
    )
}