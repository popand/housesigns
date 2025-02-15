'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content section with potential overlap */}
        <div className="relative z-20">
          <main className="pt-10 pb-8 sm:pt-12 sm:pb-16 md:pt-16 lg:pt-20 xl:pt-28">
            <div className="lg:max-w-[60%]">
              {/* Frosted glass effect for text overlap */}
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-md bg-white/70 rounded-2xl -m-4 p-4 lg:hidden" />
                <h1 className="relative text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-gray-900">Professional</span>
                  <span className="block text-blue-600">Real Estate Signs</span>
                </h1>
                <p className="relative mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  High-quality, eye-catching real estate signs delivered fast. Choose from our premium templates or create your own custom design.
                </p>
                <div className="relative mt-5 sm:mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link
                      href="/templates"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Browse Templates
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/custom-design"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Custom Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Image section aligned with the Order button */}
        <div className="absolute top-0 right-0 w-[45%] h-full">
          <div className="relative h-full w-full">
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10 lg:hidden" />
            <Image
              src="/images/real-estate-sign.jpg"
              alt="Modern real estate sign showcasing a property with pool"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 