import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/products';

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="gradient-hero text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold">Collections</h1>
          <p className="text-gray-200 mt-2">Explore our curated collections</p>
        </div>
      </div>

      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map(collection => (
            <Link key={collection.id} to={collection.link}>
              <div className="card group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h2 className="text-3xl font-serif font-bold text-center mb-2">{collection.name}</h2>
                    <p className="text-sm">{collection.productCount} Products</p>
                    <p className="text-xs mt-4 opacity-0 group-hover:opacity-100 transition">Shop Collection →</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

