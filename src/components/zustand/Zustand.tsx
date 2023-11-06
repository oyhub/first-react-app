import useProductStore from './ZustandProductStore';

function Zustand() {
// @ts-ignore
    const { products, cart, addProductToCart, clearCart} = useProductStore();

    return(
        <>
            <h2>Zustand Store</h2>
            <h3>Products to add:</h3>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        {product.title} - Price: ${product.price}
                        <button onClick={() => addProductToCart(product.id)}>
                            Add {product.title} to cart
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Products in cart:</h3>
            <ul>
                {cart.map((cartItem: any) => {
                    const product = products.find((p: any) => p.id === cartItem.productId);
                    return (
                        <li key={cartItem.productId}>
                            {product.title} - Quantity: {cartItem.quantity}
                        </li>
                    );
                })}
            </ul>
            <button onClick={clearCart}>Clear cart</button>
        </>
    )
}

export default Zustand;