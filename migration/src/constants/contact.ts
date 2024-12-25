import { Phone, Mail, MapPin } from 'lucide-react';

export const contactInfo = [
  { icon: Phone, text: '+374 10 30 80 01' },
  { icon: Mail, text: 'info@aviamed.am' },
  { icon: MapPin, text: 'ք․ Երևան, «Զվարթնոց  միջ․ օդ․, 0042' },
] as const;

export const officeHours = {
  weekdays: '9:00 - 18:00',
  saturday: '10:00 - 14:00',
  sunday: '',
} as const;