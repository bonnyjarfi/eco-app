export interface Experience {
    id: string;
    name: string;
    slug: string;
    category: string;
    location: string;
    description: string;
    image: string;
    rating: number;
    reviewCount: number;
    duration?: string;
    price?: number;
    unit?: string;
    guide?: string;
  }