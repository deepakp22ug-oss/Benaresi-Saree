import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { PRODUCTS } from '../data/products';

const Shop = () => {
  const [filters, setFilters] = useState({
    collection: [],
    fabric: [],
    priceRange: [0, 50000],
    rating: null,
  });

  const [sortBy, setSortBy] = useState('featured');
  const [expandedFilter, setExpandedFilter] = useState({
    collection: true,
    fabric: true,
    price: true,
    rating: true,
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (filterType === 'collection' || filterType === 'fabric') {
        const items = prev[filterType];
        return {
          ...prev,
          [filterType]: items.includes(value)
            ? items.filter(item => item !== value)
            : [...items, value]
        };
      }
      return prev;
    });
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(value);
    setFilters(prev => ({ ...prev, priceRange: newRange }));
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Collection filter
    if (filters.collection.length > 0) {
      result = result.filter(p => filters.collection.includes(p.collection));
    }

    // Fabric filter
    if (filters.fabric.length > 0) {
      result = result.filter(p => filters.fabric.includes(p.fabric));
    }

    // Price filter
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Rating filter
    if (filters.rating) {
      result = result.filter(p => p.rating >= filters.rating);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const collections = [...new Set(PRODUCTS.map(p => p.collection))];
  const fabrics = [...new Set(PRODUCTS.map(p => p.fabric))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="gradient-hero text-white py-8">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold">Shop Sarees</h1>
          <p className="text-gray-200 mt-2">Browse our exclusive collection</p>
        </div>
      </div>

      <div className="container-max py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold mb-6">Filters</h2>

              {/* Collection Filter */}
              <div className="mb-6 border-b pb-6">
                <button
                  onClick={() => setExpandedFilter(prev => ({ ...prev, collection: !prev.collection }))}
                  className="flex justify-between items-center w-full font-semibold mb-4"
                >
                  Collection
                  {expandedFilter.collection ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilter.collection && (
                  <div className="space-y-2">
                    {collections.map(collection => (
                      <label key={collection} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.collection.includes(collection)}
                          onChange={() => handleFilterChange('collection', collection)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{collection}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Fabric Filter */}
              <div className="mb-6 border-b pb-6">
                <button
                  onClick={() => setExpandedFilter(prev => ({ ...prev, fabric: !prev.fabric }))}
                  className="flex justify-between items-center w-full font-semibold mb-4"
                >
                  Fabric
                  {expandedFilter.fabric ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilter.fabric && (
                  <div className="space-y-2">
                    {fabrics.map(fabric => (
                      <label key={fabric} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.fabric.includes(fabric)}
                          onChange={() => handleFilterChange('fabric', fabric)}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700 capitalize">{fabric}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Filter */}
              <div className="mb-6 border-b pb-6">
                <button
                  onClick={() => setExpandedFilter(prev => ({ ...prev, price: !prev.price }))}
                  className="flex justify-between items-center w-full font-semibold mb-4"
                >
                  Price Range
                  {expandedFilter.price ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilter.price && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold">Min: ₹{filters.priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">Max: ₹{filters.priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setExpandedFilter(prev => ({ ...prev, rating: !prev.rating }))}
                  className="flex justify-between items-center w-full font-semibold mb-4"
                >
                  Rating
                  {expandedFilter.rating ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilter.rating && (
                  <div className="space-y-2">
                    {[5, 4, 3].map(rating => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.rating === rating}
                          onChange={() => setFilters(prev => ({ ...prev, rating }))}
                          className="w-4 h-4"
                        />
                        <span className="flex gap-1">
                          {[...Array(rating)].map((_, i) => (
                            <FiStar key={i} size={14} className="fill-gold-400 text-gold-400" />
                          ))}
                          <span className="text-gray-600 ml-2">& up</span>
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === null}
                        onChange={() => setFilters(prev => ({ ...prev, rating: null }))}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-600">All Ratings</span>
                    </label>
                  </div>
                )}
              </div>

              <button
                onClick={() => setFilters({
                  collection: [],
                  fabric: [],
                  priceRange: [0, 50000],
                  rating: null,
                })}
                className="w-full btn-secondary text-center"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Sort & Results Info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="card group cursor-pointer">
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={product.image}
                          alt={product.name}
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
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-primary-800 font-bold text-lg">₹{product.price}</span>
                            <span className="text-gray-500 line-through ml-2 text-sm">₹{product.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

