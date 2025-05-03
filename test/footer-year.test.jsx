import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer Year', () => {
  it('should display current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Urban Loom. All rights reserved.`)).toBeInTheDocument();
  });
}); 