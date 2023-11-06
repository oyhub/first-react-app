import { create } from 'zustand';

const useProductStore = create((set) => ({
        products: [
            {
                id: 12,
                title: 'Milk',
                price: 19.99,
                discountedPrice: 19.99,
            },
            {
                id: 13,
                title: 'Bread',
                price: 12.99,
                discountedPrice: 12.99,
            },
            {
                id: 14,
                title: 'Cheese',
                price: 25.99,
                discountedPrice: 25.99,
            },
        ],

        cart: [],

        addProductToCart: (productId: any) => {
            set((state: any) => {
                const productInCart = state.cart.find((item: any) => item.productId === productId);
                if (productInCart) {
                    console.log(productInCart)
                    productInCart.quantity += 1;
                } else {
                    state.cart.push({ productId, quantity: 1});
                }
                return { cart: [...state.cart] };
            });
        },

        clearCart: () => {
            set({ cart: [] });
        },
}));

export default useProductStore;