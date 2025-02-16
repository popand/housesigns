'use client';

import TemplateCard from '../components/TemplateCard';
import Navbar from '../components/Navbar';

// Sample template data - in a real app, this would come from an API or database
const templates = [
  {
    id: 'for-sale-modern',
    title: 'Modern For Sale',
    description: 'A sleek, modern design perfect for luxury properties. Features high-visibility layout and premium styling.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 149.99,
  },
  {
    id: 'open-house-classic',
    title: 'Classic Open House',
    description: 'Traditional design with modern touches. Perfect for residential properties and open house events.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 129.99,
  },
  {
    id: 'just-listed',
    title: 'Just Listed',
    description: 'Eye-catching design to announce your newest listing. Includes space for property highlights and contact info.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 139.99,
  },
  {
    id: 'luxury-estate',
    title: 'Luxury Estate',
    description: 'Premium design for high-end properties. Features elegant typography and sophisticated layout.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 199.99,
  },
  {
    id: 'sold-success',
    title: 'Sold Success',
    description: 'Celebrate your sales with this bold design. Perfect for building your brand and showing success.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 119.99,
  },
  {
    id: 'modern-minimal',
    title: 'Modern Minimal',
    description: 'Clean, minimal design that lets the property speak for itself. Ideal for contemporary homes.',
    imageUrl: '/images/real-estate-sign.jpg',
    price: 159.99,
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header section with consistent styling */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-gray-900">Professional</span>
                  <span className="block text-blue-600">Sign Templates</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  Choose from our collection of professionally designed real estate sign templates.
                  Each template can be customized with your information and branding.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Templates grid with adjusted spacing */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                id={template.id}
                title={template.title}
                description={template.description}
                imageUrl={template.imageUrl}
                price={template.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 