import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

const exchangeRates = {
	USD: 1.0000,
	EUR: 0.9234,
	GBP: 0.7912,
	LKR: 323.50,
	JPY: 151.50,
	AUD: 1.5200,
	CAD: 1.3600,
	CHF: 0.9000,
	CNY: 7.2400,
	INR: 83.3000
};

export const CurrencyProvider = ({ children }) => {
	const [currency, setCurrency] = useState('USD');

	const convertPrice = (price) => {
		if (typeof price !== 'number' || isNaN(price)) {
			return '0.00';
		}
		const rate = exchangeRates[currency] || 1;
		const converted = price * rate;
		return converted.toFixed(2);
	};

	const getCurrencySymbol = () => {
		const symbols = {
			USD: '$',
			EUR: '€',
			GBP: '£',
			LKR: 'රු',
			JPY: '¥',
			AUD: 'A$',
			CAD: 'C$',
			CHF: 'Fr',
			CNY: '¥',
			INR: '₹'
		};
		return symbols[currency] || '$';
	};

	const setCurrencyWithValidation = (newCurrency) => {
		if (exchangeRates[newCurrency]) {
			setCurrency(newCurrency);
			return true;
		}
		return false;
	};

	const getExchangeRate = (currencyCode) => {
		return exchangeRates[currencyCode] || 1;
	};

	return (
		<CurrencyContext.Provider
			value={{
				currency,
				setCurrency: setCurrencyWithValidation,
				convertPrice,
				getCurrencySymbol,
				availableCurrencies: Object.keys(exchangeRates),
				getExchangeRate,
				exchangeRates
			}}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export default CurrencyProvider;
