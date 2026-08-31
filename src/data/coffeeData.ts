import { FeaturedMenuItem, MenuCategory, GalleryImage, Review, JobOpening, NavLinkItem } from '../types';

export const FEATURED_MENU: FeaturedMenuItem[] = [
  {
    id: 'themoon',
    name: 'themoon',
    subtitle: 'Vanilla Cloud',
    price: '38K',
    intensity: 4,
    description: 'Secangkir yang tenang. Menghadirkan aroma melati yang lembut dipadukan dengan manisnya madu alami.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'thesun',
    name: 'thesun',
    subtitle: 'Chocolate Wonder',
    price: '40K',
    intensity: 5,
    description: 'Tegas dan familiar. Membawa karakter cokelat hitam pekat yang dirancang khusus untuk campuran susu.',
    image: 'https://images.unsplash.com/photo-1514432324607-a125290ac692?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'therain',
    name: 'therain',
    subtitle: 'Caramel Hideaway',
    price: '42K',
    intensity: 3,
    description: 'Nyaman dan menghangatkan. Keseimbangan antara keasaman apel merah dan manisnya karamel.',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'thecloud',
    name: 'thecloud',
    subtitle: 'Berry Velvet',
    price: '40K',
    intensity: 3,
    description: 'Eksperimental dan beraroma buah yang kaya. Memberikan pengalaman rasa yang unik.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800'
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: 'COFFEE',
    items: [
      { name: 'Espresso', price: '25K' },
      { name: 'Americano', price: '28K' },
      { name: 'Piccolo', price: '30K' },
      { name: 'Cappuccino', price: '32K' },
      { name: 'Flat White', price: '32K' },
      { name: 'Cafe Latte', price: '34K' },
      { name: 'Mocha', price: '38K' }
    ]
  },
  {
    title: 'BREW BAR',
    items: [
      { name: 'V60 Pour Over', price: '35K' },
      { name: 'Kalita Wave', price: '35K' },
      { name: 'Cold Brew', price: '32K' },
      { name: 'Aeropress', price: '35K' },
      { name: 'Batch Brew', price: '25K' }
    ]
  },
  {
    title: 'NON-COFFEE',
    items: [
      { name: 'Signature Chocolate', price: '35K' },
      { name: 'Ceremonial Matcha', price: '38K' },
      { name: 'Hojicha Latte', price: '35K' },
      { name: 'Artisan Tea', price: '28K' },
      { name: 'Cascara Fizz', price: '32K' }
    ]
  },
  {
    title: 'FOOD',
    items: [
      { name: 'Butter Croissant', price: '25K' },
      { name: 'Pain au Chocolat', price: '28K' },
      { name: 'Almond Croissant', price: '32K' },
      { name: 'Banana Bread', price: '25K' },
      { name: 'Seasonal Pastry', price: '35K' },
      { name: 'Grilled Sandwich', price: '45K' }
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Main Bar & Espresso Machine',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Indoor Seating & Natural Light',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Quiet Corner for Reading',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'Manual Brew Bar Area',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Raka',
    text: 'Kopinya enak, tempatnya tenang dan cocok banget buat ngobrol lama tanpa terganggu.'
  },
  {
    id: 2,
    name: 'Nadia',
    text: 'Atmosfernya nyaman. Desainnya minimalis bikin betah. Salah satu tempat favorit saya buat ngopi sore.'
  },
  {
    id: 3,
    name: 'Fajar',
    text: 'Flat white-nya mantap dan pelayanannya ramah. Sempurna untuk mampir sejenak sebelum kerja.'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 1,
    title: 'Barista (Full-Time / Part-Time)',
    location: 'Cirebon',
    type: 'Full-Time',
    desc: 'Bertanggung jawab atas penyeduhan kopi, pelayanan pelanggan, serta menjaga kebersihan area bar.'
  },
  {
    id: 2,
    title: 'Kitchen Crew / Pastry',
    location: 'Cirebon',
    type: 'Full-Time',
    desc: 'Menyiapkan menu makanan pendamping dan pastry segar harian di dapur cafe.'
  },
  {
    id: 3,
    title: 'Store Supervisor',
    location: 'Cirebon',
    type: 'Full-Time',
    desc: 'Mengkoordinasikan operasional harian cafe, inventaris, dan manajemen tim pelayanan.'
  }
];

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', showInDesktop: false },
  { id: 'menu', label: 'Menu', showInDesktop: true },
  { id: 'about', label: 'Tentang', showInDesktop: true },
  { id: 'visit', label: 'Kunjungi', showInDesktop: true },
  { id: 'career', label: 'Karir', showInDesktop: true },
  { id: 'reservation', label: 'Reservasi', showInDesktop: true },
];
