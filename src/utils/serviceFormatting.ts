export const isServiceHeading = (service: string): boolean => {
  const headings = [
    'Նեղ մասնագետներ',
    'Գործիքային հետազոտություններ',
    'Լաբորատոր հետազոտություններ',
    'Специалисты',
    'Инструментальные исследования',
    'Лабораторные исследования',
    'Specialists',
    'Instrumental Examinations',
    'Laboratory Tests'
  ];
  return headings.includes(service);
};

export const isServiceSubtitle = (service: string): boolean => {
  const subtitles = [
    'Խորհրդատվություն, հետազոտություն',
    'Консультации и исследования',
    'Consultation and Research'
  ];
  return subtitles.includes(service);
};

export const isNumberedItem = (service: string): boolean => {
  return /^\d\./.test(service);
};

export const isBulletedItem = (service: string): boolean => {
  return service.startsWith('•');
};