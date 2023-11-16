// @ts-ignore
import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard from './index';

describe('ProductCard', () => {
    test('displays information correctly', () => {
        const mockCallback = jest.fn();
        render(
            <ProductCard
                index="1"
                title="Milk"
                description="It's good for you"
                price={19.99}
                onAddToCartClick={mockCallback}
            />,
        );

        const addToCartButton = screen.getByRole('button');
        fireEvent.click(addToCartButton);

        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(screen.getByText('Milk')).toBeInTheDocument();
        expect(screen.getByText("It's good for you")).toBeInTheDocument();
        expect(screen.getByText("19.99")).toBeInTheDocument();
        expect(screen.getByText("19.99")).toBeInTheDocument();
    });
});