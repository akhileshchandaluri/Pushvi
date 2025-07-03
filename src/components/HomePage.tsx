import React, { useMemo, useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart, searchQuery }) => {
  const [sortBy, setSortBy] = useState<string>('popular');

  // Debug: Log when component mounts
  useEffect(() => {
    console.log('🏠 HomePage mounted with', products.length, 'products');
    console.log('💰 Products with prices:', products.map(p => `${p.name}: $${p.price}`));
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    console.log('🔄 SORTING TRIGGERED!');
    console.log('📋 Sort option:', sortBy);
    console.log('🔍 Search query:', searchQuery);
    
    // First filter by search query
    let filtered = products;
    if (searchQuery) {
      filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.finish.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    console.log('📦 Filtered products count:', filtered.length);

    // Then sort the filtered products
    let sorted = [...filtered];
    
    console.log('⚡ Applying sort:', sortBy);
    
    switch (sortBy) {
      case 'price-low-high':
        sorted = sorted.sort((a, b) => {
          const result = a.price - b.price;
          console.log(`💲 ${a.name} ($${a.price}) vs ${b.name} ($${b.price}) = ${result}`);
          return result;
        });
        console.log('✅ Price Low-High sorting complete');
        break;
      case 'price-high-low':
        sorted = sorted.sort((a, b) => {
          const result = b.price - a.price;
          console.log(`💲 ${b.name} ($${b.price}) vs ${a.name} ($${a.price}) = ${result}`);
          return result;
        });
        console.log('✅ Price High-Low sorting complete');
        break;
      case 'name-a-z':
        sorted = sorted.sort((a, b) => {
          const result = a.name.localeCompare(b.name);
          console.log(`🔤 ${a.name} vs ${b.name} = ${result}`);
          return result;
        });
        console.log('✅ Name A-Z sorting complete');
        break;
      case 'name-z-a':
        sorted = sorted.sort((a, b) => {
          const result = b.name.localeCompare(a.name);
          console.log(`🔤 ${b.name} vs ${a.name} = ${result}`);
          return result;
        });
        console.log('✅ Name Z-A sorting complete');
        break;
      case 'newest':
        sorted = sorted.reverse();
        console.log('✅ Newest First sorting complete');
        break;
      case 'popular':
      default:
        console.log('✅ Popular (default) sorting - no change');
        break;
    }
    
    console.log('🎯 FINAL SORTED ORDER:');
    sorted.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
    
    return sorted;
  }, [searchQuery, sortBy]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    console.log('🎛️ DROPDOWN CHANGED TO:', newValue);
    setSortBy(newValue);
  };

  // Debug: Log when sortBy changes
  useEffect(() => {
    console.log('🔄 sortBy state changed to:', sortBy);
  }, [sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
          Discover Beauty, Reimagined
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Cosmetics crafted from recycled flowers — 100% natural, completely organic, and kind to every skin type. No chemicals. No side effects. Just pure, sustainable beauty.
        </p>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {searchQuery ? `Search Results (${filteredAndSortedProducts.length})` : 'Featured Collection'}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              className="border-2 border-rose-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white font-medium"
              value={sortBy}
              onChange={handleSortChange}
              data-testid="sort-dropdown"
            >
              <option value="popular">Popular</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product, index) => (
              <div key={product.id} className="relative">
                <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-1 rounded z-10">
                  #{index + 1}
                </div>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mt-16">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 font-serif">Why Choose Pushvi?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌸</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Flower-Powered Formulas</h4>
            <p className="text-gray-600">Made from recycled petals and botanical extracts — gentle, chemical-free, and rich in nature's goodness.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍃</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Purely Organic, Truly Safe</h4>
            <p className="text-gray-600">100% natural, cruelty-free, and suitable for all skin types. No toxins. No side effects. Just clean beauty.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable. Ethical. Beautiful.</h4>
            <p className="text-gray-600">Every product celebrates your uniqueness while protecting the planet — beauty that blooms with purpose.</p>
          </div>
        </div>
      </div>
    </div>
  );
};