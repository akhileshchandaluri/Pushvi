import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.finish === 'matte' ? 'bg-gray-100 text-gray-800' :
            product.finish === 'glossy' ? 'bg-pink-100 text-pink-800' :
            'bg-rose-100 text-rose-800'
          }`}>
            {product.finish.charAt(0).toUpperCase() + product.finish.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-500">4.8</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{product.shade}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-rose-500 text-white hover:bg-rose-600 hover:scale-105 active:scale-95'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};