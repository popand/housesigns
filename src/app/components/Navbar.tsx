'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">HouseSigns</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/templates" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Templates
            </Link>
            <Link href="/custom-design" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Custom Design
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Contact
            </Link>
            <Link 
              href="/order-now" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/templates"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              href="/custom-design"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Design
            </Link>
            <Link 
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/faq"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/order-now"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 