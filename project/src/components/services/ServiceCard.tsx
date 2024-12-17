import React from 'react';
import type { Service } from '../../types/service';
import { ServiceDocument } from './ServiceDocument';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description, document } = service;
  
  return (
    <div className="group">
      <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
        <ServiceDocument document={document} title={title} />
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}