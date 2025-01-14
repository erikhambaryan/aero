import { Card } from '../components/common/Card';
import { Users, Award, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About AviCare</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leading the way in aviation healthcare with over two decades of experience serving the global aviation community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b"
            alt="Team"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-600">
            To provide exceptional healthcare services tailored to the unique needs of aviation professionals, ensuring their well-being and safety in the skies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: '10,000+ Clients' },
              { icon: Globe, label: '50+ Countries' },
              { icon: Award, label: 'Certified Excellence' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Our Values',
            content: 'Commitment to excellence, integrity, and continuous innovation in aviation healthcare.',
          },
          {
            title: 'Our Team',
            content: 'Experienced healthcare professionals specialized in aviation medicine and emergency response.',
          },
          {
            title: 'Our Promise',
            content: '24/7 support and personalized care for every aviation professional we serve.',
          },
        ].map((item, index) => (
          <Card key={index} title={item.title}>
            <p className="text-gray-600">{item.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}