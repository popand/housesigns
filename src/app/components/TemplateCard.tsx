'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export default function TemplateCard({ id, title, description, imageUrl, price }: TemplateCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image container with aspect ratio */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          quality={90}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <Link
            href={`/templates/${id}/customize`}
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
} 