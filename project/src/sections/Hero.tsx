import React from 'react';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
        alt="Aviation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl font-bold mb-6">Ավիաբուժ Բժշկական Կենտրոն</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Providing comprehensive medical services and support for aviation professionals worldwide.
        </p>
        <Button 
          className="flex items-center space-x-2"
          onClick={scrollToServices}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}