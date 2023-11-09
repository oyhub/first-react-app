import { useEffect, useState } from 'react';

function useApi(url: string) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const result = await response.json();

                if (response.ok) {
                    setData(result);
                } else {
                    setIsLoading(false);
                    setIsError(true);
                }

            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [url]);
    return { data, isLoading, isError };
}

export default useApi;