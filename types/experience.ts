export interface Experience {
  id: string;
  name: string;
  slug: string;
  category: string;
  location: string;
  description: string;

  image: string;
  gallery: string[];

  rating: number;
  reviewCount: number;

  duration?: string;
  capacity?: number;

  price: number;
unit: string;

  guide?: string;
  guideImage?: string;
}