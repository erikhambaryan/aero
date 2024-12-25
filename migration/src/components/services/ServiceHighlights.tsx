import React from 'react';
import { Stethoscope, Shield } from 'lucide-react';

export function ServiceHighlights() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Medical Certifications',
      description: 'Comprehensive medical examinations and certification services for pilots and aviation personnel.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive health monitoring and preventive care programs designed for aviation professionals.',
      image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}