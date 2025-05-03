import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';

const CurrencyMenu = () => {
  const { currency, setCurrency, availableCurrencies, getCurrencySymbol } = useCurrency();

  return (
    <div className="relative" data-testid="currency-menu">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        data-testid="currency-button"
        aria-label="Select currency"
      >
        <span>{getCurrencySymbol()}</span>
        <span>{currency}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
        data-testid="currency-dropdown"
      >
        {availableCurrencies.map((curr) => (
          <button
            key={curr}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currency === curr
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setCurrency(curr)}
            data-testid={`currency-option-${curr}`}
            aria-label={`Select ${curr} currency`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyMenu; 