'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-blue-600">
              HouseSigns
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Professional real estate signs designed to make your properties stand out.
              Quality materials, fast delivery, and exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/templates" className="text-base text-gray-500 hover:text-gray-900">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/custom-design" className="text-base text-gray-500 hover:text-gray-900">
                  Custom Design
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:support@housesigns.com" className="text-base text-gray-500 hover:text-gray-900">
                  support@housesigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-base text-gray-400">
            © {currentYear} HouseSigns. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 