import { BackgroundPattern } from '../components/common/BackgroundPattern';
import { useTranslations } from '../hooks/useTranslations';
import { 
  isServiceHeading, 
  isServiceSubtitle, 
  isNumberedItem, 
  isBulletedItem 
} from '../utils/serviceFormatting';

export function OurServices() {
  const t = useTranslations();

  const renderServiceItem = (service: string, index: number) => {
    if (isServiceSubtitle(service)) {
      return (
        <h3 key={index} className="text-xl font-bold text-center my-8">
          {service}
        </h3>
      );
    }
    
    if (isServiceHeading(service)) {
      return (
        <h4 key={index} className="font-semibold mt-6 mb-3">
          {service}
        </h4>
      );
    }
    
    if (isNumberedItem(service)) {
      return (
        <div key={index} className="pl-8 mb-2">
          {service}
        </div>
      );
    }
    
    if (isBulletedItem(service)) {
      return (
        <div key={index} className="pl-8 mb-1">
          {service}
        </div>
      );
    }
    
    return (
      <div key={index} className="mb-2">
        {service}
      </div>
    );
  };

  return (
    <section id="our-services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl">
              <BackgroundPattern />
            </div>
            <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
              <div>
                {t.services.list.map((service, index) => renderServiceItem(service, index))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}