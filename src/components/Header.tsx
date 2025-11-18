import React, { useState } from 'react';
import { Menu, X, ShoppingCart, UtensilsCrossed } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'menu', label: 'Menu' },
    { id: 'order', label: 'Commander' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">La Bonne Table</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors relative ${
                  currentPage === item.id
                    ? 'text-amber-700'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-700" />
                )}
              </button>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => onNavigate('order')}
              className="relative bg-amber-700 hover:bg-amber-800"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Panier
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate('order');
                setMobileMenuOpen(false);
              }}
              className="w-full relative bg-amber-700 hover:bg-amber-800"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Panier
              {getTotalItems() > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
