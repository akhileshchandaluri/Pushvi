import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SignInPage } from './components/SignInPage';
import { CartPage } from './components/CartPage';
import { useStore } from './hooks/useStore';

function App() {
  const {
    currentPage,
    setCurrentPage,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    user,
    signIn,
    signOut,
    searchQuery,
    setSearchQuery,
  } = useStore();

  const handleAddToCart = (product: any) => {
    addToCart({ product, quantity: 1 });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onAddToCart={handleAddToCart} searchQuery={searchQuery} />;
      case 'about':
        return <AboutPage />;
      case 'signin':
        return <SignInPage onSignIn={signIn} setCurrentPage={setCurrentPage} />;
      case 'cart':
        return (
          <CartPage
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            getTotalPrice={getTotalPrice}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return <HomePage onAddToCart={handleAddToCart} searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItemsCount={getTotalItems()}
        user={user}
        signOut={signOut}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;