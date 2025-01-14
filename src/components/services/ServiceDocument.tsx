import { FileText } from 'lucide-react';
import type { ServiceDocument } from '../../types/service';

interface ServiceDocumentProps {
  document: ServiceDocument;
  title: string;
}

export function ServiceDocument({ document, title }: ServiceDocumentProps) {
  if (document.type === 'pdf') {
    return (
      <a 
        href={document.url}
        target="_blank"
        rel="noopener noreferrer" 
        className="w-full h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <FileText className="w-16 h-16 text-blue-600" />
        <span className="ml-2 text-lg font-medium">View Document</span>
      </a>
    );
  }

  return (
    <img
      src={document.url}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
}