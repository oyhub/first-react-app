import { OnlineShop } from './ProductList';

function ProductForTesting({product}: {product: OnlineShop}) {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductForTesting;