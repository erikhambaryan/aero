import { BackgroundPattern } from '../components/common/BackgroundPattern';
import { ExpertCard } from '../components/experts/ExpertCard';
import { experts } from '../constants/experts';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types/language';

export function Experts() {
  const { currentLanguage } = useLanguage();

  const title = currentLanguage === Language.English 
    ? 'Aviation Medical Experts'
    : currentLanguage === Language.Russian
    ? 'Авиамедицинские эксперты'
    : 'Ավիաբժշկական փորձագետներ';

  const subtitle = currentLanguage === Language.English
    ? 'Aviation Medical Experts/AME/'
    : currentLanguage === Language.Russian 
    ? 'Авиамедицинские эксперты/АМЭ/'
    : 'Ավիաբժշկական փորձագետներ/ԱԲՓ/';

  const currentExperts = experts[currentLanguage];

  return (
    <section id="experts" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl">
              <BackgroundPattern />
            </div>
            <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-8 text-center">{subtitle}</h3>
                <div className="space-y-8 pl-8">
                  {currentExperts.map((expert, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-semibold">{index + 1}.</span>
                        <ExpertCard {...expert} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}