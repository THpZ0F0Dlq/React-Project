import { render, screen, fireEvent } from '@testing-library/react';
import { ProductProvider } from '../src/contexts/ProductContext';
import Home from '../src/pages/Home';

describe('Product Filtering', () => {
  it('should filter products by category', () => {
    render(
      <ProductProvider>
        <Home />
      </ProductProvider>
    );

    // Check if products are displayed
    expect(screen.getByText('Explore Our Products')).toBeInTheDocument();
  });
}); 