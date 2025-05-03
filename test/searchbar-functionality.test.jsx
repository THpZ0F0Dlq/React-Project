import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Search Functionality', () => {
  it('should handle search input', () => {
    render(<Header />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
}); 