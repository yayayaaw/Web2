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
