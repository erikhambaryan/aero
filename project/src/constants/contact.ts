import { Phone, Mail, MapPin } from 'lucide-react';

export const contactInfo = [
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: Mail, text: 'contact@avicare.com' },
  { icon: MapPin, text: '123 Aviation Way, Sky City, SC 12345' },
] as const;

export const officeHours = {
  weekdays: '9:00 AM - 6:00 PM',
  saturday: '10:00 AM - 2:00 PM',
  sunday: 'Closed',
} as const;