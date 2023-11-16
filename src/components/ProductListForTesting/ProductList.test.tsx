// @ts-ignore

import { render, waitFor, screen } from '@testing-library/react';
import ProductListForTesting from './ProductList';

const data = [
    {
        "id": "0",
        "title": "My test item",
        "description": "This is an example.",
        "price": 45.99,
        "discountedPrice": 45.99,
        "imageUrl": "https://api.noroff.dev/images/online-shop/0-usb-plug.jpg",
        "rating": 4.5,
        "tags": [
            "electronics"
        ],
        "reviews": [
            {
                "id": "c6e4fb1a-4c3d-4a4b-b785-a269f7f0707d",
                "username": "Ola N.",
                "rating": 4,
                "description": "Did what it needed to do but wish it lasted longer"
            },
            {
                "id": "dbe6d28f-35f7-43a7-88f4-93a68f3c131c",
                "username": "Kate M.",
                "rating": 5,
                "description": "Perfect!"
            }
        ]
    }
]

describe('ProductListComponent', () => {
    test('Shows 3 items', async() => {
        render (<ProductListForTesting optionalData={data} />);

        await waitFor(() => {
            const productItems = screen.queryAllByTestId('product-item-0');
            expect(productItems).toHaveLength(1);
        });
        expect(screen.getByText('My test item')).toBeInTheDocument();
        expect(screen.getByText('This is an example.')).toBeInTheDocument();
    })
})