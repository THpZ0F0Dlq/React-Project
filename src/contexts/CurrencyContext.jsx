import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

const exchangeRates = {
	USD: 1,
	EUR: 0.92,
	GBP: 0.79,
	LKR: 323.50,
	JPY: 151.50,
	AUD: 1.52,
	CAD: 1.36,
	CHF: 0.90,
	CNY: 7.24,
	INR: 83.30
};

export const CurrencyProvider = ({ children }) => {
	const [currency, setCurrency] = useState('USD');

	const convertPrice = (price) => {
		const rate = exchangeRates[currency];
		return (price * rate).toFixed(2);
	};

	const getCurrencySymbol = () => {
		const symbols = {
			USD: '$',
			EUR: '€',
			GBP: '£',
			LKR: 'Rs',
			JPY: '¥',
			AUD: 'A$',
			CAD: 'C$',
			CHF: 'Fr',
			CNY: '¥',
			INR: '₹'
		};
		return symbols[currency];
	};

	return (
		<CurrencyContext.Provider
			value={{
				currency,
				setCurrency,
				convertPrice,
				getCurrencySymbol,
				availableCurrencies: Object.keys(exchangeRates)
			}}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export default CurrencyProvider;
