export interface ServiceDocument {
  url: string;
  type: 'pdf' | 'image';
}

export interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  document: ServiceDocument;
}