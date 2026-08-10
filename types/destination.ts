export interface Destination {
    id: string;
    name: string;
    slug: string;
    location: string;
    category: string;
    rating: number;
    reviewCount: number;
    description: string;
    image: string;
    ecoScore: number;
    gallery?: string[];
  }