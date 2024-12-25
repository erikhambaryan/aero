import React from 'react';
import { Button } from '../components/common/Button';
import { contactInfo, officeHours } from '../constants/contact';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Կապնվեք Մեր Հետ</h2>
          <p className="text-xl text-gray-600">Հարցերի դեպէում առկա են հեռախոսահամար և էլ. հասցե:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">ԿԱՊ</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Աշխատանքային Ժամեր</h3>
              <p className="text-gray-600">
              Երկուշաբթի - Ուրբաթ: {officeHours.weekdays}<br />
              Շաբաթ: {officeHours.saturday}<br />
              </p>
              <p className="mt-4 text-gray-600">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>

          {/* Contact form commented out for future use
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
          */}
        </div>
      </div>
    </section>
  );
}