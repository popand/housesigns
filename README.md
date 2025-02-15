# HouseSigns - Professional Real Estate Signs Platform

A modern, full-stack web application for ordering and customizing real estate signs. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Professional Templates**
  - Wide range of pre-designed templates for various real estate needs
  - For Sale, Open House, Just Listed, Sold, and more
  - Easy customization options

- 🛠️ **Custom Design Studio**
  - Create signs from scratch
  - Upload your own logos and images
  - Customize colors, text, and layouts

- 📱 **Responsive Design**
  - Fully mobile-responsive interface
  - Order signs on any device
  - Real-time design preview

- 🚚 **Streamlined Ordering**
  - Multiple material options (Corflute, Aluminum, etc.)
  - Various size selections
  - Bulk order discounts
  - Fast shipping options

## Technology Stack

- **Frontend**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Responsive design principles

- **Backend**
  - Next.js API Routes
  - Firebase for authentication and database
  - Secure payment processing
  - Order management system

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/popand/housesigns.git
   cd housesigns
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── components/    # React components
│   ├── templates/     # Sign template pages
│   ├── custom-design/ # Custom design studio
│   ├── pricing/       # Pricing information
│   ├── faq/          # Frequently asked questions
│   ├── contact/       # Contact information
│   └── api/          # API routes
├── lib/
│   ├── firebase/     # Firebase configuration
│   ├── contexts/     # React contexts
│   └── hooks/        # Custom hooks
```

## Available Sign Types

- For Sale Signs
- Open House Signs
- Just Listed Signs
- Sold Signs
- Auction Signs
- Custom Real Estate Signs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@housesigns.com or visit our [contact page](https://housesigns.com/contact).