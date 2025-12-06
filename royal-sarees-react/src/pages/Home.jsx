import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTruck, FiLock, FiRotateCcw, FiHeadphones, FiStar } from 'react-icons/fi';
import { PRODUCTS, COLLECTIONS } from '../data/products';
import HeroCarousel from '../components/Carousel';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.badge === 'Bestseller');

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white ">
              <HeroCarousel/>
      </section>

      {/* Trust Banner */}
      <section className="bg-gray-50 py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <FiTruck className="mx-auto mb-3 text-primary-800" size={32} />
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹5,000</p>
            </div>
            <div className="text-center">
              <FiLock className="mx-auto mb-3 text-primary-800" size={32} />
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% safe transactions</p>
            </div>
            <div className="text-center">
              <FiRotateCcw className="mx-auto mb-3 text-primary-800" size={32} />
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <FiHeadphones className="mx-auto mb-3 text-primary-800" size={32} />
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Featured Sarees</h2>
          <p className="text-center text-gray-600 mb-12">Handpicked selections from our premium collection</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="card group cursor-pointer">
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
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Explore Collections</h2>
          <p className="text-center text-gray-600 mb-12">Curated collections for every occasion</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {COLLECTIONS.map((collection) => (
              <Link key={collection.id} to={collection.link}>
                <div className="card group cursor-pointer">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      {/* <h3 className="text-2xl font-serif font-bold text-center">{collection.name}</h3> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-16">
          <div className="container-max">
            <h2 className="text-4xl font-serif font-bold text-center mb-4">Best Sellers</h2>
            <p className="text-center text-gray-600 mb-12">Most loved by our customers</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="card group cursor-pointer">
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
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Why Choose VINARM BANARSI RITHEE?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Authentic Heritage</h3>
              <p className="text-gray-600">
                Every saree is crafted by master weavers with traditional techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest fabrics and materials to ensure superior quality and longevity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Exclusive Designs</h3>
              <p className="text-gray-600">
                Our collection features unique, limited-edition designs that you won't find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Customer Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                text: "The quality of this bridal saree exceeded my expectations. Highly recommended!",
                rating: 5
              },
              {
                name: "Deepika Patel",
                text: "Excellent service and beautiful designs. Will definitely shop again.",
                rating: 5
              },
              {
                name: "Neha Verma",
                text: "The craftsmanship is outstanding. Every detail is perfect.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-serif font-bold text-primary-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

