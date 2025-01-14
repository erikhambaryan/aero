import { useTranslations } from '../hooks/useTranslations';
import { contactInfo } from '../constants/contact';
import logo from '../sections/logo.png';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const t = useTranslations();
  const { currentLanguage } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и описание */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600">{t.contact.description}</p>
        </div>

        {/* Контактная информация */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t.contact.title}</h3>
              <div className="space-y-4">
                {contactInfo[currentLanguage].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {/* Проверяем наличие icon */}
                    {item.icon && <item.icon className="w-5 h-5 text-blue-600" />}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Секция "Website created by" */}
        <div className="mt-16 border-t pt-8 flex items-center justify-center">
          <p className="text-gray-600 text-sm mr-2">{t.contact.createdBy}</p>
          <a
            href="http://www.deffsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span className="text-black font-medium">Website created by </span>
<img
  src={logo}
  alt="Instagram Logo"
  className="h-12 w-auto" // Увеличенная высота
/>
            
          </a>
        </div>
      </div>
    </section>
  );
}