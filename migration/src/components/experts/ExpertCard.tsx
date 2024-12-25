import React from 'react';

interface ExpertCardProps {
  name: string;
  code: string;
  workDays: string;
  workHours: string;
}

export function ExpertCard({ name, code, workDays, workHours }: ExpertCardProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        {name} {code}
      </h3>
      <div className="text-gray-600">
        <p>Աշխ․ օրեր՝ {workDays}</p>
        <p>Աշխ․ ժամեր {workHours}</p>
      </div>
    </div>
  );
}