import React from 'react';
import { BackgroundPattern } from '../components/common/BackgroundPattern';
import { ExpertCard } from '../components/experts/ExpertCard';
import { experts } from '../constants/experts';

export function Experts() {
  return (
    <section id="experts" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ավիաբժշկական փորձագետներ</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl">
              <BackgroundPattern />
            </div>
            <div className="relative p-8 md:p-12 prose prose-lg mx-auto text-gray-600">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-8 text-center">Ավիաբժշկական փորձագետներ/ԱԲՓ/</h3>
                <div className="space-y-8 pl-8">
                  {experts.map((expert, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-semibold">{index + 1}.</span>
                        <div>
                          <h4 className="font-semibold">{expert.name} {expert.code}</h4>
                          <p className="text-gray-600">Աշխ․ օրեր՝ {expert.workDays}</p>
                          <p className="text-gray-600">Աշխ․ ժամեր {expert.workHours}</p>
                        </div>
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