import { useEffect, useState } from 'react';

const url = "https://api.noroff.dev/api/v1/online-shop";

interface Entry {
    id: string;
    title: string;
    description: string;
    price: number;
}

function PostApiCall() {
    const [entrys, setEntrys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsError(false);
                setIsLoading(true);

                const response = await fetch(url);
                const result = await response.json();

                if (result) {
                    setEntrys(result);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    setIsError(true);
                }

            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
        }, []
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>An error occurred</div>;
    }

    return(
        <div>
            <h2>Api call with post format</h2>
            {entrys.slice(0,5).map((entry: Entry) => (
                <div key={entry.id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <p>{entry.price}</p>
                </div>
            ))}
        </div>
    )
}

export default PostApiCall;