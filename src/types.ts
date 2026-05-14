export interface Product {
  id: string;
  name: string;
  category: string;
  occasion?: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export type Category = 'All' | 'Gift Boxes' | 'Personalized' | 'Couple Gifts' | 'Corporate';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Occasion {
  id: string;
  title: string;
  image: string;
}
