import { AboutContent } from '../components/about/AboutContent';
import { SectionHeader } from '../components/common/SectionHeader';
import { useTranslations } from '../hooks/useTranslations';

export function Services() {
  const t = useTranslations();

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t.about.title}
          description={t.about.description}
        />
        <AboutContent />
      </div>
      <div className="w-full border-t border-blue-500 my-16" />
    </section>
  );
}