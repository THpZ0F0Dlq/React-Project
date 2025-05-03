import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from '../src/components/ProductDetails';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'test.jpg',
  category: 'test',
  description: 'Test description'
};

describe('Product Details Page', () => {
  it('should display product details', () => {
    render(
      <BrowserRouter>
        <ProductDetails product={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
}); 