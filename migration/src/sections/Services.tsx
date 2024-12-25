import React from 'react';
import { AboutContent } from '../components/about/AboutContent';
import { SectionHeader } from '../components/common/SectionHeader';

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="ՄԵՐ ՄԱՍԻՆ"
          description="«Ավիաբուժ» բժշկական կենտրոն» փակ բաժնետիրական ընկերությունը /այսուհետ` Ընկերություն /ստեղծվել է (վերակազմակերպվել է) Հայաստանի Հանրապետության կառավարության 16.12.2000թ. թիվ 828 որոշման և ՀՀ ԿԱ քաղաքացիական ավիացիայի գլխավոր վարչության պետի 09.01.2001թ. թիվ 3 հրամանի հիման վրա «Զվարթնոց» ՄՕ ՓԲԸ առանձնացման ճանապարհով:"
        />
        <AboutContent />
      </div>
      <div className="w-full border-t border-blue-500 my-16" />
    </section>
  );
}