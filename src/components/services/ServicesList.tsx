import { services } from '../../constants/services';
import { ServiceCard } from './ServiceCard';

export function ServicesList() {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
}