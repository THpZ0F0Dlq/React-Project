import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../src/contexts/CartContext';
import Product from '../src/components/Product';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'test.jpg',
  category: 'test'
};

describe('Cart Total Calculation', () => {
  it('should calculate total correctly', () => {
    render(
      <CartProvider>
        <Product product={mockProduct} />
      </CartProvider>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    // Check if total is calculated correctly
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });
}); 