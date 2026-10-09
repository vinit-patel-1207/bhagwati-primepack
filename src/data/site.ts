export const site = {
  name: 'Bhagwati Primepack',
  legalName: 'Bhagwati Primepack',
  tagline: 'Pack Smart • Ship Better',
  strapline: 'Premium Packaging Solutions & Supply Partner',
  description:
    'Bhagwati Primepack supplies courier bags, tamper evident packaging, bubble mailers, kraft and corrugated packaging, tapes and labels to businesses across e-commerce, retail, FMCG, pharma and logistics.',
  url: 'https://www.bhagwatiprimepack.in',
  // TODO: business hours still need the client's verified details.
  phone: '+91 82003 66990',
  phoneHref: '+918200366990',
  whatsapp: '918200366990',
  email: 'bhagwatiprimepack@gmail.com',
  address: {
    line1: '27, Ramdev Campus, Behind HP Petrol Pump, Canal Road',
    line2: 'Magob, Surat, Gujarat 395011',
    locality: 'Surat',
    region: 'Gujarat',
    postalCode: '395011',
    country: 'India',
  },
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM IST',
  founded: 2010,
} as const

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
] as const

export const valueProps = [
  {
    title: 'Premium Quality Products',
    body: 'Material-tested packaging that protects goods through every leg of the journey.',
  },
  {
    title: 'Reliable Supply Chain',
    body: 'Held stock and planned replenishment so your dispatch lines never wait.',
  },
  {
    title: 'Bulk Order Capability',
    body: 'Volume pricing and scheduled deliveries built around your order cycles.',
  },
  {
    title: 'Dedicated Business Support',
    body: 'A named contact for specifications, samples, pricing and reordering.',
  },
] as const

export const journey = [
  { year: '2010', title: 'Founded', body: 'Started supplying packaging to local traders.' },
  { year: '2015', title: 'Range expanded', body: 'Added mailers, tapes and labelling lines.' },
  { year: '2020', title: 'Supply chain built', body: 'Warehousing and vendor network scaled up.' },
  {
    year: '2025',
    title: 'Growing together',
    body: 'Serving businesses across industries as Primepack.',
  },
] as const

export const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: 'Minimums depend on the product and whether it is stock or custom printed. Stock lines usually start at one carton; custom printed runs have higher minimums. Send us your requirement and we will confirm exact quantities with the quote.',
  },
  {
    q: 'Do you supply custom printed and branded packaging?',
    a: 'Yes. We produce branded courier bags, tapes, labels and cartons to your artwork and size specification. Share your dimensions and artwork and we will come back with options and lead times.',
  },
  {
    q: 'Can I get samples before placing a bulk order?',
    a: 'Yes. We provide samples of stock products so you can test fit, strength and finish before committing to a volume order.',
  },
  {
    q: 'What are your delivery timelines?',
    a: 'Stock items typically dispatch within the same week. Custom printed and made-to-size items depend on the specification — the lead time is confirmed on your quote.',
  },
  {
    q: 'Which regions do you supply?',
    a: 'We supply across India through our logistics partners. Tell us your delivery location and order volume and we will confirm freight and timelines.',
  },
] as const
