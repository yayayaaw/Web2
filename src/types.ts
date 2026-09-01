export type PageType = 'home' | 'menu' | 'about' | 'visit' | 'career' | 'reservation';

export interface FeaturedMenuItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  intensity: number;
  description: string;
  image: string;
}

export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: number;
  title: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
}

export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  desc: string;
}

export interface NavLinkItem {
  id: PageType;
  label: string;
  showInDesktop: boolean;
}

export interface SiteSettings {
  cafeName: string;
  logoLine1: string;
  logoLine2: string;
  eyebrow: string;

  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;

  introQuote: string;

  featuredMenuTitle: string;
  featuredMenuDesc: string;

  experienceTitle: string;
  experienceDesc: string;
  experienceImage: string;

  aboutHeadline: string;
  aboutImage: string;
  aboutStoryLabel: string;
  aboutStoryLead: string;
  aboutStoryBody: string;
  aboutCoffeeLabel: string;
  aboutCoffeeBody1: string;
  aboutCoffeeBody2: string;

  address: string;
  addressLandmark: string;
  hoursWeekday: string;
  hoursWeekend: string;
  whatsapp: string;
  phone: string;
  instagram: string;
  email: string;
  mapsLink: string;
  mapsImage: string;

  footerTagline: string;
  ratingScore: string;
}

export interface CMSData {
  settings: SiteSettings;
  featuredMenu: FeaturedMenuItem[];
  menuCategories: MenuCategory[];
  gallery: GalleryImage[];
  reviews: Review[];
  jobs: JobOpening[];
  navLinks: NavLinkItem[];
}
