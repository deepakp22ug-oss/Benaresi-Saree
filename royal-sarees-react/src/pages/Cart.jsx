import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { useStore } from '../store/appStore';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateCartQuantity } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-max py-12">
          <h1 className="text-4xl font-serif font-bold mb-12">Shopping Cart</h1>
          <div className="text-center py-20">
            <FiShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-serif font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some beautiful sarees to get started!</p>
            <Link to="/shop" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <h1 className="text-4xl font-serif font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden">
              {cart.map(item => (
                <div key={item.id} className="border-b last:border-b-0 p-6 flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.collection}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 border border-gray-300 rounded">
                        <button
                          onClick={() => updateCartQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 border-l border-r border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-primary-800">₹{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                    >
                      <FiTrash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="font-serif font-bold text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {cartTotal >= 5000 ? (
                      <span className="text-emerald-600">Free</span>
                    ) : (
                      `₹${(500).toLocaleString()}`
                    )}
                  </span>
                </div>
                {cartTotal < 5000 && (
                  <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
                    Add ₹{(5000 - cartTotal).toLocaleString()} more for free shipping
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-xl text-primary-800">
                    ₹{(cartTotal + (cartTotal < 5000 ? 500 : 0)).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full btn-primary mb-4">
                Proceed to Checkout
              </button>

              <Link to="/shop" className="block text-center text-primary-800 hover:text-primary-900 font-semibold">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

