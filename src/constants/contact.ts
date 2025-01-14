import { Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types/language';

interface ContactInfo {
  icon?: typeof Phone | typeof Mail | typeof MapPin; // Сделаем `icon` опциональным для "Website created by"
  text: string;
  link?: string; // Добавляем поле для ссылки (например, для логотипа Instagram)
}

export const contactInfo: Record<Language, ContactInfo[]> = {
  [Language.Armenian]: [
    { icon: Phone, text: '+374 10 30 80 01' },
    { icon: Mail, text: 'info@aviamed.am' },
    { icon: MapPin, text: 'ք․ Երևան, «Զվարթնոց միջ․ օդ․, 0042' },
  ],
  [Language.Russian]: [
    { icon: Phone, text: '+374 10 30 80 01' },
    { icon: Mail, text: 'info@aviamed.am' },
    { icon: MapPin, text: 'г. Ереван, "Звартноц меж. воз., 0042' },
  ],
  [Language.English]: [
    { icon: Phone, text: '+374 10 30 80 01' },
    { icon: Mail, text: 'info@aviamed.am' },
    { icon: MapPin, text: 'Yerevan, Zvartnots Int. Airport, 0042' },
  ],
};