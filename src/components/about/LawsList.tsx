import { useTranslations } from '../../hooks/useTranslations';

export function LawsList() {
  const t = useTranslations();

  if (!t.about.laws?.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4">
        {t.about.lawsTitle}
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        {t.about.laws.map((law, index) => (
          <li key={index}>{law}</li>
        ))}
      </ul>
    </div>
  );
}