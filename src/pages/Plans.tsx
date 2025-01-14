import { Button } from '../components/common/Button';
import { Check } from 'lucide-react';

export function Plans() {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: 'per month',
      features: [
        'Annual Medical Certification',
        'Basic Health Monitoring',
        'Email Support',
        'Emergency Assistance',
      ],
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'per month',
      features: [
        'Everything in Basic',
        'Priority Medical Services',
        '24/7 Phone Support',
        'Quarterly Health Checkups',
        'Family Coverage',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per organization',
      features: [
        'Everything in Professional',
        'Dedicated Medical Team',
        'Custom Health Programs',
        'Global Coverage',
        'Fleet Management',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Healthcare Plans</h1>
        <p className="text-xl text-gray-600">Choose the perfect plan for your aviation healthcare needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
              plan.popular
                ? 'border-2 border-blue-500 shadow-xl'
                : 'border border-gray-200 shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm">
                Most Popular
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}