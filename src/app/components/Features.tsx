'use client';

import { Palette, Truck, Clock, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Professional Templates',
      description: 'Choose from a wide range of professionally designed templates for various real estate needs.',
      icon: Palette,
    },
    {
      name: 'Fast Delivery',
      description: 'Quick turnaround times with reliable shipping to get your signs when you need them.',
      icon: Truck,
    },
    {
      name: '24/7 Ordering',
      description: 'Order your signs anytime, anywhere with our easy-to-use online platform.',
      icon: Clock,
    },
    {
      name: 'Quality Guaranteed',
      description: 'Premium materials and printing quality backed by our satisfaction guarantee.',
      icon: Shield,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your real estate signs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            High-quality signs with fast turnaround times and professional designs to help you stand out in the market.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 