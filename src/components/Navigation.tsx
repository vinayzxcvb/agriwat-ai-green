
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: 'home', label: t('home'), action: () => scrollToSection('home') },
    { key: 'about', label: t('about'), action: () => scrollToSection('about') },
    { key: 'features', label: t('features'), path: '/features' },
    { key: 'aiAssistant', label: t('aiAssistant'), path: '/ai-assistant' },
    { key: 'demo', label: t('demo'), action: () => scrollToSection('demo') },
    { key: 'contact', label: t('contact'), action: () => scrollToSection('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">{t('heroTitle')}</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={item.action}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors w-full text-left font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={item.action}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors w-full text-left font-medium"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
