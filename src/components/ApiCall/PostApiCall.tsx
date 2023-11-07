import { useEffect, useState } from 'react';
import Post from './Post';

const url = "https://api.noroff.dev/api/v1/online-shop";

export interface Entry {
    id: string;
    title: string;
    description: string;
    price: number;
}

function PostApiCall() {
    const [entrys, setEntrys] = useState<Entry[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null >(null);

    useEffect(() => {
        async function getData() {
            try {
                setIsError(null);
                setIsLoading(true);

                const response = await fetch(url);
                const result = await response.json();

                if (response.ok) {
                    setEntrys(result);
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
        getData();
        }, []
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{ isError }</div>;
    }

    return(
        <div>
            <h2>Api call with post format</h2>
            {entrys.slice(0,5).map((entry: Entry) => (
                <Post key={entry.id} entry={entry}/>
            ))}
        </div>
    )
}

export default PostApiCall;