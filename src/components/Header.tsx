import React from 'react';
import { ShoppingBag, User, Search, Heart } from 'lucide-react';
import { Page } from '../types';
import pushviLogo from '../assets/pushvi-logo.png';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cartItemsCount: number;
  user: any;
  signOut: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  cartItemsCount,
  user,
  signOut,
  searchQuery,
  setSearchQuery,
}) => {
  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'About', page: 'about' as Page },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <img src={pushviLogo} alt="Pushvi Logo" className="w-10 h-10 object-contain" />
            <span className="ml-2 text-2xl font-bold text-gray-900 font-serif">pushvi</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-rose-500 border-b-2 border-rose-500 pb-1'
                    : 'text-gray-600 hover:text-rose-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          {currentPage === 'home' && (
            <div className="hidden sm:flex items-center bg-gray-50 rounded-full px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search lipsticks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent flex-1 text-sm placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 text-gray-600 hover:text-rose-500 transition-colors duration-200"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User */}
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hi, {user.name}!</span>
                <button
                  onClick={signOut}
                  className="text-sm text-gray-500 hover:text-rose-500 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('signin')}
                className="flex items-center space-x-1 text-gray-600 hover:text-rose-500 transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {currentPage === 'home' && (
          <div className="sm:hidden pb-4">
            <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search lipsticks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent flex-1 text-sm placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};