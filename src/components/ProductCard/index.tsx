export interface IProductCard {
    "index": string;
    "title": string;
    "description": string;
    "price": number;
    "onAddToCartClick": any;
}

function ProductCard({ index, title, description, price, onAddToCartClick }: IProductCard) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{price}</div>
            <button onClick={() => onAddToCartClick(index)}>Add to cart</button>
        </div>
    );
}

export default ProductCard;