import { Stethoscope, Shield } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: 'Medical Certifications',
    description: 'Comprehensive medical examinations and certification services for pilots and aviation personnel.',
    document: {
      url: '/documents/medical-certifications.pdf',
      type: 'pdf'
    }
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Proactive health monitoring and preventive care programs designed for aviation professionals.',
    document: {
      url: '/documents/preventive-care.pdf',
      type: 'pdf'
    }
  }
] as const;