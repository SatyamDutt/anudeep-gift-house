import { Product, Testimonial, Occasion } from './types';

export const PRODUCTS: Product[] = [
  // Gift Boxes
  {
    id: '1',
    name: 'Azure Celebration Box',
    category: 'Gift Boxes',
    occasion: 'Birthday',
    price: 85,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    description: 'Our signature celebration kit with premium treats, a scented candle, and handcrafted accessories.',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Wellness Retreat Set',
    category: 'Gift Boxes',
    occasion: 'Anniversary',
    price: 120,
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop',
    description: 'A complete relaxation package featuring organic spa essentials, silk eye mask, and herbal teas.',
    isTrending: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Gourmet Morning Hamper',
    category: 'Gift Boxes',
    price: 65,
    image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=800&auto=format&fit=crop',
    description: 'Fresh roast coffee, artisanal citrus jam, and two handcrafted ceramic mugs for the perfect start.',
  },
  {
    id: 'b4',
    name: 'Midnight Starlight Box',
    category: 'Gift Boxes',
    occasion: 'Birthday',
    price: 95,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887183?q=80&w=800&auto=format&fit=crop',
    description: 'Premium dark chocolate selection paired with a sleek minimalist notebook and pen set.',
  },
  {
    id: 'b5',
    name: 'Garden Picnic Basket',
    category: 'Gift Boxes',
    occasion: 'Anniversary',
    price: 140,
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop',
    description: 'A vintage-inspired wicker basket filled with cheese, crackers, and sparkling grape juice.',
  },
  {
    id: 'b6',
    name: 'Ocean Breeze Spa Kit',
    category: 'Gift Boxes',
    price: 78,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    description: 'Refreshing bath salts, sea-mineral lotions, and a natural loofah in a soft blue gift pouch.',
  },
  
  // Personalized
  {
    id: '4',
    name: 'Custom Silver Cufflinks',
    category: 'Personalized',
    occasion: 'Wedding',
    price: 145,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=800&auto=format&fit=crop',
    description: 'Sterling silver cufflinks with custom hand-engraved initials and a polished finish.',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Embossed Leather Journal',
    category: 'Personalized',
    price: 48,
    image: 'https://images.unsplash.com/photo-1544816155-12df9ec4563d?q=80&w=800&auto=format&fit=crop',
    description: 'Full-grain Italian leather journal that can be customized with your name or favorite quote.',
    isTrending: true,
  },
  {
    id: '6',
    name: 'Infinity Photo Frame',
    category: 'Personalized',
    occasion: 'Anniversary',
    price: 75,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop',
    description: 'A sleek mental frame with laser-engraved dates, messages, and a minimalist design.',
  },
  {
    id: 'p4',
    name: 'Monogrammed Travel Wallet',
    category: 'Personalized',
    price: 89,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    description: 'Premium leather travel organizer with gold or silver foil monogramming included.',
  },
  {
    id: 'p5',
    name: 'Custom Voice Wave Art',
    category: 'Personalized',
    occasion: 'Wedding',
    price: 110,
    image: 'https://images.unsplash.com/photo-1513519247388-193ad51c50be?q=80&w=800&auto=format&fit=crop',
    description: 'A beautiful visual representation of your recorded message, printed on high-quality canvas.',
  },
  {
    id: 'p6',
    name: 'Engraved Crystal Decanter',
    category: 'Personalized',
    price: 165,
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop',
    description: 'Lead-free crystal decanter with precision engraving for a sophisticated home bar.',
  },

  // Couple Gifts
  {
    id: '7',
    name: 'Matcha Tea Set for Two',
    category: 'Couple Gifts',
    occasion: 'Wedding',
    price: 95,
    image: 'https://images.unsplash.com/photo-1520990704022-ac32274944d1?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional Japanese matcha set with two handcrafted ceramic bowls and bamboo whisk.',
    isTrending: true,
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Adventure Map Poster',
    category: 'Couple Gifts',
    price: 40,
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop',
    description: 'Metallic scratch-off world map for couples who love to document their journeys together.',
  },
  {
    id: 'c4',
    name: 'Couple Espresso Mugs',
    category: 'Couple Gifts',
    occasion: 'Anniversary',
    price: 32,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    description: 'Dainty porcelain espresso mugs with a modern split-heart design when placed together.',
  },
  {
    id: 'c5',
    name: 'Stargazer Camp Lantern',
    category: 'Couple Gifts',
    price: 58,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop',
    description: 'Eco-friendly rechargeable lantern for romantic nights under the stars.',
  },
  {
    id: 'c6',
    name: 'His & Hers Silk Robes',
    category: 'Couple Gifts',
    occasion: 'Wedding',
    price: 210,
    image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=800&auto=format&fit=crop',
    description: '100% pure mulberry silk loungewear for ultimate comfort and luxury at home.',
  },

  // Corporate
  {
    id: '9',
    name: 'Executive Tech Kit',
    category: 'Corporate',
    price: 180,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    description: 'High-end noise cancelling headphones, leather tech organizer, and premium stylus set.',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '10',
    name: 'Sustainable Desk Set',
    category: 'Corporate',
    price: 55,
    image: 'https://images.unsplash.com/photo-1616628188506-4ad8de5a6591?q=80&w=800&auto=format&fit=crop',
    description: 'Felt desk mat and bamboo tech accessories for a clean, conscious modern office.',
  },
  {
    id: '11',
    name: 'Classic Wine Box',
    category: 'Corporate',
    price: 90,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    description: 'Elegantly packed vintage selection with premium openers and aerator accessories.',
  },
  {
    id: 'corp4',
    name: 'Smart Hydration Bottle',
    category: 'Corporate',
    price: 45,
    image: 'https://images.unsplash.com/photo-1602143307185-84487493375e?q=80&w=800&auto=format&fit=crop',
    description: 'Matte-finish bottle with a built-in temperature sensor and hydration tracking app.',
    isTrending: true,
  },
  {
    id: 'corp5',
    name: 'Nordic Office Planter',
    category: 'Corporate',
    price: 38,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d446?q=80&w=800&auto=format&fit=crop',
    description: 'Minimalist self-watering ceramic planter designed to sit perfectly on any workspace.',
  }
];

export const CATEGORIES = ['All', 'Gift Boxes', 'Personalized', 'Couple Gifts', 'Corporate'];

export const OCCASIONS: Occasion[] = [
  { id: '1', title: 'Birthday', image: 'https://images.unsplash.com/photo-1530103043871-3e70746d451f?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Anniversary', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Corporate', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jennings',
    role: 'Loyal Customer',
    content: 'The attention to detail in their gift boxes is unparalleled. The premium packaging alone makes it worth it!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Corporate Partner',
    content: "We use Lumina for all our client gifting. They always deliver on time and the quality is consistently high.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Emma Watson',
    role: 'Event Designer',
    content: 'Searching for modern gifts used to be hard until I found Lumina. Their aesthetic is exactly what our clients want.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
];

export const WHATSAPP_NUMBER = '9199866230';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_PHONE_DISPLAY = '(+91) 9199866230';
