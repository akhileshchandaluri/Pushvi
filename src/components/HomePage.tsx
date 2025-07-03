import React, { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart, searchQuery }) => {
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredAndSortedProducts = useMemo(() => {
    // First filter by search query
    let filtered = products;
    if (searchQuery) {
      filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.finish.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Then sort the filtered products
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low-high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-a-z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-z-a':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'newest':
        return sorted.reverse(); // Assuming the array order represents newest to oldest
      case 'popular':
      default:
        return sorted; // Keep original order for popular
    }
  }, [searchQuery, sortBy]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

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
          <select 
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="popular">Sort by Popular</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
            <option value="name-z-a">Name: Z to A</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
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