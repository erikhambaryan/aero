import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      <section className="relative h-[600px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Aviation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Excellence in Aviation Healthcare</h1>
          <p className="text-xl mb-8 max-w-2xl">Providing comprehensive medical services and support for aviation professionals worldwide.</p>
          <Button className="flex items-center space-x-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Medical Certifications',
              description: 'Comprehensive medical examinations for pilots and aviation personnel.',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
            },
            {
              title: 'Emergency Response',
              description: '24/7 medical support and emergency assistance worldwide.',
              image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0',
            },
            {
              title: 'Health Monitoring',
              description: 'Continuous health tracking and preventive care programs.',
              image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8',
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}