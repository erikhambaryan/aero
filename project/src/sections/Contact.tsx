import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { contactInfo } from '../constants/contact';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const t = useTranslations();
  const { currentLanguage } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600">{t.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t.contact.title}</h3>
              <div className="space-y-4">
                {contactInfo[currentLanguage].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}