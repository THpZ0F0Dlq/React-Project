import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';

const Product = ({ product }) => {
	const { addToCart } = useCart();
	const { convertPrice, getCurrencySymbol } = useCurrency();

	return (
		<div className="group relative" data-testid={`product-${product.id}`}>
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
					data-testid={`product-image-${product.id}`}
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<Link to={`/product/${product.id}`} data-testid={`product-link-${product.id}`}>
							<span aria-hidden="true" className="absolute inset-0" />
							{product.title}
						</Link>
					</h3>
					<p className="mt-1 text-sm text-gray-500" data-testid={`product-category-${product.id}`}>
						{product.category}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-900" data-testid={`product-price-${product.id}`}>
					{getCurrencySymbol()}{convertPrice(product.price)}
				</p>
			</div>
			<button
				onClick={() => addToCart(product)}
				className="mt-2 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
				data-testid={`add-to-cart-${product.id}`}
				aria-label={`Add ${product.title} to cart`}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
