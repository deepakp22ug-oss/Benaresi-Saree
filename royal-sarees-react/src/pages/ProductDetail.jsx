import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar, FiChevronDown } from 'react-icons/fi';
import { PRODUCTS } from '../data/products';
import { useStore } from '../store/appStore';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();

  const isInWishlist = wishlist.some(item => item.id === parseInt(id));

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(0);
      setSelectedColor(0);
      setQuantity(1);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm mb-8 text-gray-600">
          <a href="/" className="hover:text-primary-800">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary-800">Shop</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <div>
            <div className="bg-white rounded-lg mb-4 overflow-hidden">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/assets/product-placeholder.svg'; }}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition ${
                    mainImage === idx ? 'border-primary-800' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${idx + 1}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/assets/product-placeholder.svg'; }}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-primary-800 font-semibold mb-2">{product.category.toUpperCase()}</p>
            <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-primary-800">₹{product.price}</span>
              <span className="text-xl line-through text-gray-500">₹{product.originalPrice}</span>
              <span className="bg-primary-800 text-white px-3 py-1 rounded text-sm font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Stock */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="text-emerald-600 font-semibold">✓ In Stock ({product.stock} available)</p>
              ) : (
                <p className="text-red-600 font-semibold">Out of Stock</p>
              )}
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Weave</p>
                  <p className="font-semibold">{product.details.weave}</p>
                </div>
                <div>
                  <p className="text-gray-600">Zari</p>
                  <p className="font-semibold">{product.details.zari}</p>
                </div>
                <div>
                  <p className="text-gray-600">Blouse</p>
                  <p className="font-semibold">{product.details.blouse}</p>
                </div>
                <div>
                  <p className="text-gray-600">Length</p>
                  <p className="font-semibold">{product.details.length}</p>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <label className="font-semibold mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`px-4 py-2 rounded-lg border-2 transition ${
                      selectedColor === idx
                        ? 'border-primary-800 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-semibold mb-3 block">Quantity</label>
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border border-gray-300 rounded-lg py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <FiShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className={`px-6 py-3 border-2 rounded-lg font-semibold transition ${
                  isInWishlist
                    ? 'border-primary-800 bg-primary-800 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-primary-800'
                }`}
              >
                <FiHeart size={20} fill={isInWishlist ? 'white' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-primary-50 to-yellow-50 rounded-lg p-4">
              <h3 className="font-serif font-bold mb-3">Why You'll Love This Saree</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Premium hand-woven fabric with traditional craftsmanship</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Perfect for weddings, festivals, and special occasions</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Includes coordinated blouse piece</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>30-day easy return policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="flex border-b">
            {['description', 'care', 'shipping', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-semibold transition ${
                  activeTab === tab
                    ? 'border-b-2 border-primary-800 text-primary-800'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="font-serif font-bold text-xl mb-4">Product Description</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h3 className="font-serif font-bold text-xl mb-4">Care Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dry clean recommended for best results</li>
                  <li>• Do not machine wash or bleach</li>
                  <li>• Store in a cool, dry place away from direct sunlight</li>
                  <li>• Use a mild detergent if hand washing</li>
                  <li>• Iron on low heat with steam to maintain the fabric</li>
                  <li>• Use a soft brush for zari work</li>
                  <li>• Avoid prolonged soaking</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h3 className="font-serif font-bold text-xl mb-4">Shipping & Returns</h3>
                <p className="text-gray-700 mb-4">
                  We offer free shipping on orders above ₹5,000 across India. International shipping available.
                  30-day easy return policy on all products. Please visit our Shipping & Returns page for detailed information.
                </p>
                <a href="#" className="text-primary-800 hover:underline font-semibold">
                  View full shipping policy →
                </a>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="font-serif font-bold text-xl mb-6">Customer Reviews</h3>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <p className="font-semibold">Verified Purchase</p>
                      <p className="text-sm text-gray-600">Amazing quality and service!</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "This saree is absolutely gorgeous. The fabric quality is excellent and delivery was fast."
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={16} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

