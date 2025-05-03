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

describe('Cart Functionality', () => {
  it('should add one item to cart', () => {
    render(
      <CartProvider>
        <Product product={mockProduct} />
      </CartProvider>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    // Verify the cart item count
    const cartCount = screen.getByText('1');
    expect(cartCount).toBeInTheDocument();
  });
}); 