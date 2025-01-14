import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../types/language';

interface ExpertCardProps {
  name: string;
  code: string;
  workDays: string;
  workHours: string;
}

export function ExpertCard({ name, code, workDays, workHours }: ExpertCardProps) {
  const { currentLanguage } = useLanguage();

  const workDaysLabel = currentLanguage === Language.English 
    ? 'Working days:'
    : currentLanguage === Language.Russian 
    ? 'Раб. дни:'
    : 'Աշխ․ օրեր՝';

  const workHoursLabel = currentLanguage === Language.English
    ? 'Working hours:'
    : currentLanguage === Language.Russian 
    ? 'Раб. часы:'
    : 'Աշխ․ ժամեր';

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        {name} {code}
      </h3>
      <div className="text-gray-600">
        <p>{workDaysLabel} {workDays}</p>
        <p>{workHoursLabel} {workHours}</p>
      </div>
    </div>
  );
}