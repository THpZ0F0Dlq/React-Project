import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();
  const { convertPrice, getCurrencySymbol } = useCurrency();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">
              {getCurrencySymbol()}{convertPrice(product.price)}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 