type Product = {
    id: number;
    title: string;
    price: number;
    isOnSale: boolean;
};

type ProductListProps = {
    products: Product[];
};

export default function ProductList({products}: ProductListProps) {
    return <>
        <ul>
        { products.map((product) => (
            <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                {product.isOnSale && <div>ON SALE</div>}
            </li>
            ))}
        </ul>
    </>
}