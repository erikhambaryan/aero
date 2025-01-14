import { Card } from '../components/common/Card';
import { Stethoscope, Plane, Clock, Shield } from 'lucide-react';

export function WhatWeDo() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">What We Do</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive healthcare services tailored specifically for aviation professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: Stethoscope,
            title: 'Medical Certifications',
            description: 'Comprehensive medical examinations and certification services for pilots and aviation personnel.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
          },
          {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock medical assistance and emergency response services worldwide.',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
          },
          {
            icon: Shield,
            title: 'Preventive Care',
            description: 'Proactive health monitoring and preventive care programs designed for aviation professionals.',
            image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8',
          },
          {
            icon: Plane,
            title: 'Aviation Expertise',
            description: 'Specialized medical care that understands the unique challenges of aviation professionals.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
          },
        ].map((service, index) => (
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

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Initial Assessment',
              description: 'Complete evaluation of your health needs and requirements.',
            },
            {
              step: '02',
              title: 'Customized Care Plan',
              description: 'Development of a personalized healthcare program.',
            },
            {
              step: '03',
              title: 'Ongoing Support',
              description: 'Continuous monitoring and support for your health journey.',
            },
          ].map((item, index) => (
            <Card key={index} title={`${item.step}. ${item.title}`}>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}