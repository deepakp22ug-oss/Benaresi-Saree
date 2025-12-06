import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useStore } from '../store/appStore';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-max py-12">
          <h1 className="text-4xl font-serif font-bold mb-12">Wishlist</h1>
          <div className="text-center py-20">
            <FiHeart className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-serif font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add your favorite sarees to your wishlist!</p>
            <Link to="/shop" className="btn-primary inline-block">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <h1 className="text-4xl font-serif font-bold mb-12">
          Wishlist <span className="text-lg text-gray-600">({wishlist.length} items)</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(product => (
            <div key={product.id} className="card group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/assets/product-placeholder.svg'; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-primary-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.collection}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary-800 font-bold text-lg">₹{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm"
                  >
                    <FiShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
                  >
                    <FiHeart size={18} className="fill-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

