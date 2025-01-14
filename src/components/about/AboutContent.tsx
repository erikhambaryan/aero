import { BackgroundPattern } from '../common/BackgroundPattern';
import { LawsList } from './LawsList';
import { useTranslations } from '../../hooks/useTranslations';

export function AboutContent() {
  const t = useTranslations();

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute inset-0 bg-gray-200 rounded-2xl">
        <BackgroundPattern />
      </div>
      
      <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
        {t.about.content.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
        <LawsList />
      </div>
    </div>
  );
}