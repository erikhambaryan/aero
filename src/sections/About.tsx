import { BackgroundPattern } from '../components/common/BackgroundPattern';
import { useTranslations } from '../hooks/useTranslations';

export function About() {
  const t = useTranslations();

  return (
    <section id="mission" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.mission.title}</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl">
              <BackgroundPattern />
            </div>
            <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
              {t.mission.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}