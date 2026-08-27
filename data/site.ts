export const site = {
  name: 'Ola Egbon Furniture Ltd.',
  tagline: 'Quality Furniture. Beautiful Spaces.',
  positioning: 'Furniture for homes, offices, and spaces designed to be lived in.',
  phone: '+234 703 378 5610',
  whatsapp: '2347033785610',
  address: 'FH8H+329, Opposite Oando Filling Station, Ajasse-Ipo Road, Ilorin, Kwara State, Nigeria',
  shortAddress: 'Ilorin, Kwara State, Nigeria',
  maps: 'https://www.google.com/maps/search/?api=1&query=FH8H%2B329%2C%20Opposite%20Oando%20Filling%20Station%2C%20Ajasse-Ipo%20Road%2C%20Ilorin%2C%20Kwara%20State%2C%20Nigeria',
  openingHours: ['Opening hours are configurable; please call or WhatsApp before visiting.'],
  url: 'https://olaegbonfurniture.example.com'
};
export const nav = [ ['Home','/'], ['Shop','/shop'], ['About','/about'], ['Custom Furniture','/custom-furniture'], ['Services','/services'], ['Gallery','/gallery'], ['Contact','/contact'] ] as const;
export const waLink = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
