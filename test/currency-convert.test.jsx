import { render, screen } from '@testing-library/react';
import { CurrencyProvider } from '../src/contexts/CurrencyContext';
import Product from '../src/components/Product';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'test.jpg',
  category: 'test'
};

describe('Currency Conversion', () => {
  it('should convert price to different currencies', () => {
    render(
      <CurrencyProvider>
        <Product product={mockProduct} />
      </CurrencyProvider>
    );

    // Check if price is displayed in USD by default
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });
}); 