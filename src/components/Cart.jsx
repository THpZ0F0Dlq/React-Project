import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useSidebar } from '../contexts/SidebarContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, calculateTotal } = useCart();
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const { closeSidebar } = useSidebar();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button
          onClick={closeSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {getCurrencySymbol()}{convertPrice(item.price)} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">
                {getCurrencySymbol()}{convertPrice(calculateTotal())}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={clearCart}
                className="flex-1 py-2 border rounded hover:bg-gray-100"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  // Implement checkout logic
                  closeSidebar();
                }}
                className="flex-1 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 