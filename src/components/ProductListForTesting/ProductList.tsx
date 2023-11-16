import ProductForTesting from "./Product";
import { useEffect, useState } from 'react';

export interface OnlineShop {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    imageUrl: string;
    rating: number;
    tags: [];
    reviews: [];
}
interface ProductListProps {
    optionalData?: any[];
}

function ProductListForTesting({optionalData}: ProductListProps) {
    const baseUrl = "https://api.noroff.dev/api/v1/online-shop";

    const [data, setData] = useState<OnlineShop[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    useEffect(() => {
        async function getData(url: string) {
            try {
                setIsError(null);
                setIsLoading(true);

                const response = await fetch(url);
                const result = await response.json();

                if (response.ok) {
                    setData(result);
                } else {
                    setIsError('Could not get data');
                }

            } catch (error) {
                setIsLoading(false);
                setIsError('Oops, something went wrong... Try again');
            } finally {
                setIsLoading(false);
            }
        }

        getData(baseUrl);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {isError}</div>;
    }

    if (optionalData && JSON.stringify(optionalData) !== JSON.stringify(data)) {
        setData(optionalData)
    }

    return (
        <ul>
            { data.slice(0, 3).map((item, index) => (
                <li key={item.id} data-testid={`product-item-${index}`}>
                    <ProductForTesting product={item} />
                </li>
            )) }
        </ul>
    );
}

export default ProductListForTesting;
