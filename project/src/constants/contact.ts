import { Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types/language';

interface ContactInfo {
  icon: typeof Phone | typeof Mail | typeof MapPin;
  text: string;
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

export const officeHours = {
  weekdays: '9:00 - 18:00',
  saturday: '10:00 - 14:00',
  sunday: '',
} as const;