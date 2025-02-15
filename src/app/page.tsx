import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
